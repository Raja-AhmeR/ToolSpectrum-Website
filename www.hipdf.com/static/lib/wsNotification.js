/**
 * Web Notification
 * 
 * Auth: ligz#wondershare.cn
 * Date: 17:12 2019/6/25
 * Copyright: Wondershare Inc.
 */

if (typeof wsNotification !== 'object') {
    wsNotification = (function() {

        var _wsNotification,
            tracker,
            notificationAlias = null,
            navigatorAlias = navigator,
            windowAlias = window,
            serviceWorkerScript = 'assets/src/js/sw.html',
            swRegistration = null,
            isSubscribed = false,
            applicationServerPublicKey = 'BPc5waOW4ChDckg3SwS4C5OU5srytDEYFsVtwDefMv01IHqlbvQKguG5QW18r8EFSoPokjThYvciOrtjuzsrbLk',
            sysConfig = {}
        ;

        if (windowAlias._NOTIFICATION_CONFIG) {
            var config;
            try {
                if ('object' === typeof windowAlias._NOTIFICATION_CONFIG) {
                    config = windowAlias._NOTIFICATION_CONFIG;
                } else {
                    config = JSON.parse(windowAlias._NOTIFICATION_CONFIG);
                }
                if (config.pubkey) {
                    applicationServerPublicKey = config.pubkey;
                }
                if (config.worker) {
                    serviceWorkerScript = config.worker;
                }
                sysConfig = config;
            } catch (error) {
                logConsoleError(error);
            }
        }

        function urlB64ToUint8Array(base64String) {
            var padding = '='.repeat((4 - base64String.length % 4) % 4);
            var base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, 'index.html');
            
            var rawData = window.atob(base64),
                outputArray = new Uint8Array(rawData.length);
            
            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }

        function logConsoleError(message) {
            // needed to write it this way for jslint
            var consoleType = typeof console;
            if (consoleType !== 'undefined' && console && console.error) {
                console.error(message);
            }
        }
        
        function isSupport() {
            var result = !!('serviceWorker' in navigatorAlias && 'PushManager' in windowAlias && 'Notification' in windowAlias);
            if (result) {
                notificationAlias = Notification;
                if ('denied' === notificationAlias.permission) {
                    result = false;
                }
            }
            return result;
        }

        function closeRegisteredService() {
            if (!sysConfig || !sysConfig.closed) {
                return false;
            }
            // console.log('closeRegisteredService')

            navigatorAlias.serviceWorker.getRegistration(serviceWorkerScript)
            .then(function(registration) {
                if (registration) {
                    registration.unregister();
                }
            }).catch(function(error) {
                logConsoleError(error);
            });

            return true;
        }

        function updateRegisteredService() {
            navigatorAlias.serviceWorker.getRegistration(serviceWorkerScript)
            .then(function(registration) {
                // console.log('registration', registration)
                if (registration) {
                    registration.update();
                }
            }).catch(function(error) {
                logConsoleError(error);
            });
        }

        function registerService(callback) {
            // update
            updateRegisteredService();

            // console.log('registerService')
            navigatorAlias.serviceWorker.register(serviceWorkerScript)
            .then(function(swReg) {
                swRegistration = swReg;
                if (typeof callback === 'function') {
                    callback();
                }
            })
            .catch(function(error) {
                logConsoleError(error);
            });
        }

        function requestPermission() {
            if (isSubscribed) {
                return true;
            }

            notificationAlias.requestPermission(function(permission) {
                if ('granted' === permission) {
                    subscribeUser();
                } else if ('denied' === permission) {
                    trackServer('', 'denied');
                }
            });
        }

        function subscribeUser() {
            var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
            swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey
            })
            .then(function(subscription) {
                // console.log('User is subscribed:', subscription);
            
                isSubscribed = true;
            
                trackServer(subscription, 'granted');
            })
            .catch(function(error) {
                logConsoleError(error);
            });
        }

        function getSubscription(callback) {

            // Set the initial subscription value
            swRegistration.pushManager.getSubscription()
            .then(function(subscription) {
                isSubscribed = !(subscription === null);
                // console.log('User was subscribed:', subscription);
                if (typeof callback === 'function') {
                    callback();
                }
            });
        }

        function createNotification() {
            if (!isSupport()) {
                return false;
            }

            // if closed
            if (closeRegisteredService()) {
                return true;
            }

            tracker = new Tracker;
            registerService(function() {
                getSubscription(requestPermission);
            });
        }

        function trackServer(subscription, permission) {
            // TODO: Send subscription to application server
            // console.log('trackSubscription', subscription, permission)

            var request = 'action=subscriber&';
            request += 'subscription=' + (subscription ? escape(JSON.stringify(subscription)) : '')
                    + '&permission=' + permission;

            tracker.trackRequest(request);
        }

        function Tracker() {

            var
                configTrackerUrl = 'https://useroperation.wondershare.com/api/v1.0/notification/report',
                configUidCookieName = 'auth_uid',
                configDeviceIdCookieName = '_ws_device_id',
                configSiteIdCookieName = 'siteid'
            ;

            /*
             * Get cookie value
             */
            function getCookie(cookieName) {
                var cookiePattern = new RegExp('(^|;)[ ]*' + cookieName + '=([^;]*)'),
                    cookieMatch = cookiePattern.exec(document.cookie);

                return cookieMatch ? windowAlias.decodeURIComponent(cookieMatch[2]) : null;
            }
    
            /*
             * Extract hostname from URL
             */
            function getHostName(url) {
                // scheme : // [username [: password] @] hostame [: port] [/ [path] [? query] [# fragment]]
                var e = new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)'),
                    matches = e.exec(url);
    
                return matches ? matches[1] : url;
            }

            /**
             * Returns the URL
             */
            function getRequest(request) {

                request += [
                    '',
                    'uid=' + (getCookie(configUidCookieName) || ''),
                    'devid=' + (getCookie(configDeviceIdCookieName) || ''),
                    'domain=' + (getHostName(location.href) || ''),
                    'from_site=' + (getCookie(configSiteIdCookieName) || ''),
                ].join('&');

                return request;
            }

            /*
             * Send image request to server using GET.
             * The infamous web bug (or beacon) is a transparent, single pixel (1x1) image
             */
            function sendRequest(request, callback) {
                // make sure to actually load an image so callback gets invoked
                request = request.replace("send_image=0","send_image=1");

                var image = new Image(1, 1);
                image.onload = function () {
                    if (typeof callback === 'function') {
                        callback();
                    }
                };
                image.src = configTrackerUrl + (configTrackerUrl.indexOf('?') < 0 ? '?' : '&') + request;
            }

            /**
             * Sends a tracking request with custom request parameters.
             *
             * @param request eg. "param=value&param2=value2"
             * @param callback
             */
            this.trackRequest = function (request, callback) {
                var fullRequest = getRequest(request);
                sendRequest(fullRequest, callback);
            };
        }

        _wsNotification = {
            initialized: false,

            subscribe: function() {
                if (false === this.initialized) {
                    createNotification();
                    this.initialized = true;
                }
            }
        };

        // Expose wsAnalytics as an AMD module
        if (typeof define === 'function' && define.amd) {
            define('wsNotification', [], function () { return _wsNotification; });
        }

        return _wsNotification;
    })();
}

(function () {
    'use strict';
    wsNotification.subscribe();
})();