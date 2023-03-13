var resourcesUrl = ""

function addCssByLink(url) {
    var doc = document;
    var link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);
    var heads = doc.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(link);
    else
        doc.documentElement.appendChild(link);
}

function addJsByLink(jsUrl) {
    var doc = document;
    var jsLink = doc.createElement("script");
    jsLink.setAttribute("src", jsUrl);
    var heads = doc.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(jsLink);
    else
        doc.documentElement.appendChild(jsLink);
}
addJsByLink("../../../apis.google.com/js/platform.js")
addJsByLink("../../../www.google.com/recaptcha/api.js")



if (jq340(".comment-list .align-items-start p.author-img").length > 0) {
    function CheckImgExists(imgurl, num) {
        jq340.ajax({
            type: 'get',
            url: imgurl,
            success: function(data) {
                jq340(".comment-list .align-items-start").eq($r - num).find(".author-img img").attr("src", imgurl)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(false)
            }
        })
    }
    // CheckImgExists()

    var $r = jq340(".comment-list .align-items-start").length,
        authorImgUrl
    var reg = /&amp;/g;
    for (var commListNum = 0; commListNum < $r; commListNum++) {
        authorImgUrl = jq340(".comment-list .align-items-start").eq(commListNum).find("p.author-img").html()
        authorImgUrl = authorImgUrl.replace(reg, "&");
        CheckImgExists(authorImgUrl, $r)
    }
}

var languageJson = {
    "CN": {
        loginOutTipsBefore: "提交评论，请",
        loginOutTipsButton: "请先登录",
        loginInModalTitle: "登陆",
        clickLogOutButton: "点击登出",
        reviewButton: "提交",
        noCommentsTips: "暂无评论",
        inputTips: "请输入评论…",
        commentNullTips: "请输入评论再提交！",
        verificationSubmitTips: "提交",
        developmentTips: "正在开发中...",
        facebookLoginFail: "facebook拒绝了您的请求",
        logoutSuccessTips: "登出成功！",
        commentsSubmitSuccess: "评论提交成功！正在审核...",
        submittedFailed: "评论失败！",
        loginFirstTips: "请先登录！",
        thumbRepeatTips: "您已经赞过这条评论，请勿重复点赞！",
        noVerificationTips: "请先进行验证",
        clickRateTips: "点击上方的星进行打分",
        generallyRated: "平均分",
        participatedTips: "人参加了评分",
        ratingsSuccess: "评分成功！",
        commentedTips: "您已经给该文章打过分数了，请不要重复打分！",
    },
    "EN": {
        loginOutTipsButtonBefore: "To submit a comment, please",
        loginOutTipsButtonBut: " log in first",
        loginOutTipsButtonAfter: ".",
        loginInModalTitle: "Log in",
        clickLogOutButton: "Click log out",
        reviewButton: "submit",
        noCommentsTips: "No comments",
        inputTips: "Please enter comments…",
        commentNullTips: "Please enter a comment before submitting！",
        verificationSubmitTips: "submit",
        developmentTips: "Under development...",
        facebookLoginFail: "Facebook has denied you access",
        logoutSuccessTips: "Logout success！",
        commentsSubmitSuccess: "Your comments has been submitted successfully. We'll review and issue it as soon as possible. Thank you.",
        submittedFailed: "Comment on failure！",
        loginFirstTips: "Please login first！",
        thumbRepeatTips: "You have liked this comment, please do not repeat thumb up!",
        noVerificationTips: "Please verify it first!",
        clickRateTips: "Click to rate this post",
        generallyRated: "Generally rated",
        participatedTips: "participated",
        ratingsSuccess: "Ratings success!",
        commentedTips: "You have commented too much on this article, please do not repeat scoring!"
    },
    "FR": {
        loginOutTipsButtonBefore: "Veuillez soumettre vos commentaires",
        loginOutTipsButtonBut: "  Veuillez vous connecter d'abord  ",
        loginOutTipsButtonAfter: ".",
        loginInModalTitle: "Se connecter",
        clickLogOutButton: "Cliquez pour vous déconnecter",
        reviewButton: "Soumettre",
        noCommentsTips: "Aucune commentaire",
        inputTips: "Veuillez laisser un commentaire",
        commentNullTips: "Veuillez laisser le commentaire avant de soumettre！",
        verificationSubmitTips: "Soumettre",
        developmentTips: "En cours de développement...",
        facebookLoginFail: "facebook a refusé votre demande",
        logoutSuccessTips: "Déconnexion réussie！",
        commentsSubmitSuccess: "Vous avez réussi à soumettre les commentaires! Vérification en cours...",
        submittedFailed: "échoué à commenter！",
        loginFirstTips: "Veuillez vous connecter d'abord！",
        thumbRepeatTips: "Vous avez déjà aimé ce commentaire, veuillez ne pas répéter！",
        noVerificationTips: "Vérification d'abord",
        clickRateTips: "Cliquez des étoiles ci-dessus pour noter ",
        generallyRated: "Points en moyenne",
        participatedTips: "personnes ont participé à l'évaluation",
        ratingsSuccess: "l'évaluation réussie！",
        commentedTips: "Vous avez déjà noté pour cet article, veuillez ne pas répéter！",
    },
    "ES": {
        loginOutTipsButtonBefore: "Por favor envíe un comentario",
        loginOutTipsButtonBut: "  Por favor inicie sesión primero  ",
        loginOutTipsButtonAfter: ".",
        loginInModalTitle: "Iniciar sesión",
        clickLogOutButton: "Haga clic para cerrar sesión",
        reviewButton: "Enviar",
        noCommentsTips: "Sin comentarios",
        inputTips: "Ingrese un comentario ...",
        commentNullTips: "Por favor ingrese un comentario y envíelo",
        verificationSubmitTips: "Enviar",
        developmentTips: "En desarrollo...",
        facebookLoginFail: "Facebook rechazó tu solicitud",
        logoutSuccessTips: "Salir exitosamente！",
        commentsSubmitSuccess: "¡Comentario enviado con éxito! Revisando ...",
        submittedFailed: "¡Error al comentar!",
        loginFirstTips: "¡Inicie sesión primero!",
        thumbRepeatTips: "¡Ya te ha gustado este comentario, no lo repitas!",
        noVerificationTips: "Verifique primero",
        clickRateTips: "Haz clic en la estrella de arriba para puntuar",
        generallyRated: "puntaje promedio",
        participatedTips: "Las personas participaron en la calificación",
        ratingsSuccess: "¡Puntuación exitosa!",
        commentedTips: "Ya has puntuado el artículo, ¡no repitas la puntuación!",
    },
    "DE": {
        loginOutTipsButtonBefore: "Bewertung abgeben",
        loginOutTipsButtonBut: "  Loggen Sie sich bitte zurest ein",
        loginOutTipsButtonAfter: ".",
        loginInModalTitle: "Einloggen",
        clickLogOutButton: "Klicken Sie hier, um sich abzumelden",
        reviewButton: "Senden",
        noCommentsTips: "Keine Bewertung",
        inputTips: "Bitte geben Sie eine Bewertung ein ...",
        commentNullTips: "Bitte geben Sie eine Bewertung ein und dann senden Sie!",
        verificationSubmitTips: "Senden",
        developmentTips: "Es wird entwickelt...",
        facebookLoginFail: "Facebook hat Ihre Anfrage abgelehnt",
        logoutSuccessTips: "Erfolgreich abgemeldet",
        commentsSubmitSuccess: "Die Bewertung wurde erfolgreich gesandt! Überprüfung...",
        submittedFailed: "Bewertung fehlgeschlagen!",
        loginFirstTips: "Loggen Sie sich bitte zurest ein！",
        thumbRepeatTips: "Sie haben diese Bewertung bereits gemocht, bitte wiederhole nicht!",
        noVerificationTips: "Bitte überprüfen Sie zuerst",
        clickRateTips: "Bewertung abgeben",
        generallyRated: "Bewertung:",
        participatedTips: " Rezensionen",
        ratingsSuccess: "Erfolgreiche Bewertung!",
        commentedTips: "Sie haben den Artikel bereits bewertet, bitte wiederholen nicht!",
    },
    "BR": {
        loginOutTipsButtonBefore: "Para enviar seus comentários, ",
        loginOutTipsButtonBut: "  por favor faça o login primeiro  ",
        loginOutTipsButtonAfter: ".",
        loginInModalTitle: "Faça o Login",
        clickLogOutButton: "Clique para Logout",
        reviewButton: "Enviar",
        noCommentsTips: "Nenhum Comentário",
        inputTips: "Importe Comentários…",
        commentNullTips: "Por favor insira um comentário e envie!",
        verificationSubmitTips: "Enviar",
        developmentTips: "Em Desenvolvimento...",
        facebookLoginFail: "Facebook rejeitou seu pedido",
        logoutSuccessTips: "Logout com Sucesso！",
        commentsSubmitSuccess: "Comentário Enviado com Sucesso! Revendo ...",
        submittedFailed: "Comentário Falhado!",
        loginFirstTips: "Por favor, faça o login primeiro！",
        thumbRepeatTips: "Você já deixou o like neste comentário, por favor não repita o like！",
        noVerificationTips: "Por favor, verifique primeiro",
        clickRateTips: "Clique na estrela acima para marcar",
        generallyRated: "Pontuação Média",
        participatedTips: "Pessoas participaram da classificação",
        ratingsSuccess: "Comentário com Sucesso！",
        commentedTips: "Você já marcou o artigo, por favor, não repita a pontuação！",
    },
    "IT": {
        loginOutTipsButtonBefore: "Invia commento, per favore",
        loginOutTipsButtonBut: "  Effettua il login prima  ",
        loginOutTipsButtonAfter: ".",
        loginInModalTitle: "Entra",
        clickLogOutButton: "Fai clic per disconnetterti",
        reviewButton: "Invia",
        noCommentsTips: "Nessun commento",
        inputTips: "Inserisci un commento ...",
        commentNullTips: "Inserisci un commento e invia!",
        verificationSubmitTips: "Invia",
        developmentTips: "Under development ...",
        facebookLoginFail: "facebook ha rifiutato la tua richiesta",
        logoutSuccessTips: "Esci riuscito!",
        commentsSubmitSuccess: "Commento inviato correttamente! Revisione in corso ...",
        submittedFailed: "Commento non riuscito!",
        loginFirstTips: "Per favore, prima accedi!",
        thumbRepeatTips: "Questo commento ti è già piaciuto, non ripeterlo!",
        noVerificationTips: "Verifica prima",
        clickRateTips: "Fai clic sulla stella sopra per segnare",
        generallyRated: "score medio",
        participatedTips: "Le persone hanno partecipato alla valutazione",
        ratingsSuccess: "Punteggio successo！",
        commentedTips: "Hai già segnato l'articolo, per favore non ripetere il punteggio!",
    },
    "AR": {
        loginOutTipsButtonBefore: "يرجى تقديم تعليق",
        loginOutTipsButtonBut: "  يرجى تسجيل الدخول أولا  ",
        loginOutTipsButtonAfter: ".",
        loginInModalTitle: "تسجيل الدخول",
        clickLogOutButton: "انقر لتسجيل الخروج",
        reviewButton: "عرض",
        noCommentsTips: "لا تعليقات حتى الآن",
        inputTips: "الرجاء إدخال تعليق…",
        commentNullTips: "الرجاء إدخال تعليق وإرسال！",
        verificationSubmitTips: "عرض",
        developmentTips: "تحت التطوير...",
        facebookLoginFail: "رفض Facebook طلبك",
        logoutSuccessTips: "نجاح الخروج！",
        commentsSubmitSuccess: "تم تقديم المراجعة بنجاح! قيد المراجعة...",
        submittedFailed: "فشل التعليق！",
        loginFirstTips: "يرجى تسجيل الدخول أولا！",
        thumbRepeatTips: "لقد أعجبك هذا التعليق بالفعل ، من فضلك لا تكرر ما شابه！",
        noVerificationTips: "يرجى التحقق أولا",
        clickRateTips: "انقر على النجمة أعلاه للتسجيل",
        generallyRated: "متوسط ​​النتيجة",
        participatedTips: "شارك الناس في التصنيف",
        ratingsSuccess: "تقييم ناجح！",
        commentedTips: "لقد سجلت بالفعل المقال ، يرجى عدم تكرار النتيجة！",
    },
    "JA": {
        loginOutTipsButtonBefore: "まずは",
        loginOutTipsButtonBut: "ログイン",
        loginOutTipsButtonAfter: "してください。",
        loginInModalTitle: "ログイン",
        clickLogOutButton: "クリックしてログアウトします",
        reviewButton: "送信",
        noCommentsTips: "コメントはありません。",
        inputTips: "コメントを入力してください。",
        commentNullTips: "コメントを入力して送信してください！",
        verificationSubmitTips: "送信",
        developmentTips: "開発中...",
        facebookLoginFail: "Facebookのログインに問題が発生しました。",
        logoutSuccessTips: "ログアウトに成功しました！",
        commentsSubmitSuccess: "コメントの投稿に成功しました。",
        submittedFailed: "コメントの投稿に失敗しました！",
        loginFirstTips: "続行するにはログインしてください。",
        thumbRepeatTips: "すでにこのコメントに「いいね」しました。",
        noVerificationTips: "まずは認証してください！",
        clickRateTips: "この記事はお役に立ちましたか。ぜひ評価してください。",
        generallyRated: "5つ星のうち",
        participatedTips: "名様が評価しました。",
        ratingsSuccess: "ご評価頂き、誠にありがとうございます。",
        commentedTips: "ずでに評価しました。重複の評価はご遠慮ください。"
    },
    "RO": {
        loginOutTipsButtonBefore: " trimite comentarii，",
        loginOutTipsButtonBut: " vă rugăm să vă conectați mai întâi ",
        loginOutTipsButtonAfter: ".",
        clickLogOutButton: " Faceți clic pentru a vă deconecta ",
        reviewButton: " Trimite ",
        noCommentsTips: " nici un comentariu încă",
        inputTips: " Vă rugăm să introduceți un comentariu",
        commentNullTips: " Vă rugăm să introduceți un comentariu înainte de a trimite",
        verificationSubmitTips: " Trimite ",
        developmentTips: " în dezvoltare...",
        facebookLoginFail: " facebook a respins cererea dvs. ",
        logoutSuccessTips: " Deconectați-vă cu succes ",
        commentsSubmitSuccess: " Comentariu trimis cu succes! În curs de revizuire...",
        submittedFailed: " Comentariul a eșuat ",
        loginFirstTips: " vă rugăm să vă conectați mai întâi ",
        thumbRepeatTips: " V-a plăcut deja acest comentariu, vă rugăm să nu repetați ",
        noVerificationTips: " Vă rugăm să verificați mai întâi ",
        clickRateTips: " Faceți clic pe steaua de mai sus pentru a înscrie ",
        generallyRated: " Scorul mediu ",
        participatedTips: " participat la notare ",
        ratingsSuccess: " Scor reușit ",
        commentedTips: " Ați notat deja acest articol, vă rugăm să nu repetați scorul ",
    },
    "NL": {
        loginOutTipsButtonBefore: "Opmerkingen indienen，",
        loginOutTipsButtonBut: "Log alstublieft eerst in",
        loginOutTipsButtonAfter: ".",
        clickLogOutButton: "Klik om uit te loggen",
        reviewButton: " indienen",
        noCommentsTips: "Nog geen commentaar",
        inputTips: "Voer een opmerking in",
        commentNullTips: "Voer een opmerking in voordat u deze verzendt",
        verificationSubmitTips: "Indienen",
        developmentTips: "In ontwikkeling... ",
        facebookLoginFail: "Facebook heeft uw verzoek afgewezen",
        logoutSuccessTips: "Meld u succesvol af",
        commentsSubmitSuccess: "Reactie succesvol ingediend! Wordt beoordeeld... ",
        submittedFailed: "Reactie mislukt",
        loginFirstTips: "Log alstublieft eerst in",
        thumbRepeatTips: "Je hebt deze opmerking al leuk gevonden, herhaal alsjeblieft niet",
        noVerificationTips: "Controleer eerst",
        clickRateTips: "Klik op de ster hierboven om te scoren",
        generallyRated: "De gemiddelde score",
        participatedTips: "Mensen namen deel aan de partituur",
        ratingsSuccess: "Scoor succesvol",
        commentedTips: "U heeft dit artikel al gescoord, herhaal de score niet",
    },
    "RU": {
        loginOutTipsButtonBefore: "Чтобы представить комментарии,",
        loginOutTipsButtonBut: " пожалуйста, войдите сначала",
        loginOutTipsButtonAfter: ".",
        clickLogOutButton: "Нажмите, чтобы выйти",
        reviewButton: "Представить",
        noCommentsTips: "Пока нет комментариев",
        inputTips: "Пожалуйста, введите комментарий",
        commentNullTips: "Пожалуйста, введите комментарий перед отправкой ",
        verificationSubmitTips: "Представить",
        developmentTips: " В развитие...",
        facebookLoginFail: "Facebook отклонил ваш запрос",
        logoutSuccessTips: "Выйти успешно",
        commentsSubmitSuccess: "Комментарий успешно отправлен! Сейчас на рассмотрении ... ",
        submittedFailed: "Не удалось представить комментарии",
        loginFirstTips: " Пожалуйста, войдите сначала",
        thumbRepeatTips: "Вам уже понравился этот комментарий, пожалуйста, не повторяйте",
        noVerificationTips: " Пожалуйста, проверьте сначала",
        clickRateTips: " Нажмите на звездочку выше, чтобы оценить",
        generallyRated: " Средний балл",
        participatedTips: " ** Людей поставил оценку",
        ratingsSuccess: " Успешно поставили оценку",
        commentedTips: " Вы уже оценили эту статью, пожалуйста, не повторяйте оценить",
    },
    "PL": {
        loginOutTipsButtonBefore: "Zgłaszać uwagi,",
        loginOutTipsButtonBut: "Proszę najpierw się zalogować",
        loginOutTipsButtonAfter: ".",
        clickLogOutButton: "Kliknij, aby się wylogować",
        reviewButton: "Zatwierdź",
        noCommentsTips: "Nie ma jeszcze komentarza",
        inputTips: "Wpisz komentarz",
        commentNullTips: "Przed przesłaniem wprowadź komentarz",
        verificationSubmitTips: "Zatwierdź",
        developmentTips: "W rozwoju ...",
        facebookLoginFail: "Facebook odrzucił Twoją prośbę",
        logoutSuccessTips: "Wyloguj się pomyślnie",
        commentsSubmitSuccess: "Komentarz przesłany pomyślnie! W trakcie przeglądu ...",
        submittedFailed: "Komentarz nie powiódł się",
        loginFirstTips: "Proszę najpierw się zalogować",
        thumbRepeatTips: "Ten komentarz już Ci się spodobał, proszę nie powtarzać",
        noVerificationTips: "Sprawdź najpierw",
        clickRateTips: "Kliknij gwiazdkę powyżej, aby zdobyć punkty",
        generallyRated: "Średni wynik",
        participatedTips: "W partyturze uczestniczyli ludzie",
        ratingsSuccess: "Wynik pomyślny",
        commentedTips: "Ten artykuł został już oceniony, nie powtarzaj punktacji",
    },
    "KR": {
        loginOutTipsButtonBefore: "댓글을 작성하려면 먼저",
        loginOutTipsButtonBut: " 로그인 해주세요",
        loginOutTipsButtonAfter: ".",
        loginInModalTitle: "로그인",
        clickLogOutButton: "클릭하여 로그아웃",
        reviewButton: "등록",
        noCommentsTips: "댓글 없음",
        inputTips: "댓글을 작성해주세요…",
        commentNullTips: "등록하기 전에 댓글을 작성해주세요!",
        verificationSubmitTips: "등록",
        developmentTips: "개발중...",
        facebookLoginFail: "Facebook에서 액세스를 거부했습니다.",
        logoutSuccessTips: "로그아웃 성공!",
        commentsSubmitSuccess: "댓글이 성공적으로 제출되었습니다. 최대한 빨리 검토하고 발행하겠습니다. 감사합니다!",
        submittedFailed: "댓글 등록에 실패했습니다!",
        loginFirstTips: "먼저 로그인 해주세요！",
        thumbRepeatTips: "이 댓글을 좋아하셨습니다. 반복 신청하지 마세요!",
        noVerificationTips: "먼저 확인하세요!",
        clickRateTips: "클릭하여 평가하기",
        generallyRated: "일반 평가",
        participatedTips: "참여",
        ratingsSuccess: "평가 성공!",
        commentedTips: "이 기사에 이미 평가를 남기셨습니다!"
    }
}

var loginStatue = false
var apiUrlGlobal, artIdGlobal, nickNameGlobal, platformGlobal, userIdGlobal, siteIdGlobal, authorIdGlobal;
var gmailToken
var CommentsAddTickesCallBack = function(response) {
    gmailToken = response
};

Vue.component('commentsBox', {
    template: '<div class="w-100">' +
        '<div class="logged-out">' +
        '<div class="d-flex align-items-center  pb-5">' +
        '<div class="mr-3 author-img rounded-circle d-flex align-items-center">' +
        ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="52" viewBox="0 0 52 52">' +
        '<defs>' +
        '<circle id="a" cx="25" cy="25" r="25"/>' +
        ' </defs>' +
        ' <g fill="none" fill-rule="evenodd" transform="translate(1 1)">' +
        '  <mask id="b" fill="#fff">' +
        '  <use xlink:href="#a"/>' +
        ' </mask>' +
        '<use fill="#E3E3E3" stroke="#E3E3E3" xlink:href="#a"/>' +
        '<g fill-rule="nonzero" mask="url(#b)">' +
        '<path fill="#656565" d="M29.75 28.417c2.917-1.5 4.917-4.667 4.917-8.167 0-5.083-4.084-9.25-9.167-9.25a9.14 9.14 0 0 0-9.167 9.167c0 3.5 2 6.75 4.917 8.25C16.417 29.833 13 33.833 13 38h1.667c0-5 4.833-8.333 10.833-8.333S36.333 33 36.333 38H38c0-4.167-3.417-8.167-8.25-9.583zM18 20.167c0-4.167 3.333-7.5 7.5-7.5S33 16 33 20.167c0 4.166-3.333 7.5-7.5 7.5s-7.5-3.417-7.5-7.5z"/>' +
        '</g>' +
        '</g>' +
        '</svg>' +
        '</div>' +
        '<div class="right border p-3">{{languageTipsList.loginOutTipsButtonBefore}}<a class="text-secondary" @click="logInDialog">{{languageTipsList.loginOutTipsButtonBut}}</a>{{languageTipsList.loginOutTipsButtonAfter}}</div>' +
        '	</div>' +
        '</div>' +

        '	<div class="logged-in">' +
        '<div class="d-flex align-items-center  pb-5">' +
        '	<div class="mr-3 author-img" id="userAvatar" data-toggle="tooltip" @click="countLogout()" data-placement="top" :title="languageTipsList.clickLogOutButton">' +
        '<img src="http://images.wondershare.com/tpl-comments/img/comment-2.svg" style="border-radius: 50%;cursor: pointer;max-width:100%" class="img-fluid" alt=""/>' +
        '</div>' +
        '	<div class="right d-flex">' +
        '<input class="border  px-3" type="text" value="" id="commentContent" :placeholder="languageTipsList.inputTips"/>' +
        '<button class="ml-2 px-lg-5 px-4 bg-secondary text-white" @click="submitReview" style="cursor: pointer">{{languageTipsList.reviewButton}}</button>' +
        '</div>' +
        '</div>' +
        '	</div>' +
        '<div class="loginIn commentModal">' +
        '<div class="commentModal-dialog">' +
        '<div class="commentModal-header">' +
        '<h5 class="commentModal-title w-100 font-size-normal font-weight-medium text-center">{{languageTipsList.loginInModalTitle}}</h5>' +
        '<div class="close-modal" @click="closeModal">' +
        '<span>×</span>' +
        '</div>' +
        '	</div>' +
        '<div class="commentModal-body">' +
        '<div class="wsc-footer-social text-gray-4 link-inherit d-flex py-4 justify-content-center">' +
        '<a class="mr-4 svg-icon" style="background: #4267b2" @click="faceBookClick">' +
        '<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 264 512"><path d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"></path></svg>' +
        '</a>' +
        '<a class="mr-4 svg-icon" style="background: #de4d3b" @click="googlePlusClick" id="googlePlusClick">' +
        ' <svg xmlns="http://www.w3.org/2000/svg" class="wsc-svg-brand-google" fill="#fff" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '	</div>' +
        '<div class="validation commentModal">' +
        '<div class="commentModal-dialog">' +
        '<div class="commentModal-header">' +
        '<h5 class="commentModal-title w-100 font-size-normal font-weight-medium text-center"></h5>' +
        '<div class="close-modal" @click="closeModal">' +
        '<span>×</span>' +
        '</div>' +
        '	</div>' +
        '<div class="commentModal-body">' +
        '<div id="commentsValidation" class="text-center">' +
        '<div action="?" method="POST" class="text-center" style="display: flex;    justify-content: center; margin-bottom: 20px;">' +
        '<div class="g-recaptcha" data-sitekey="6Ld8FKsUAAAAAMZrLI2yUPZI4NLZhU5XB-z19VDo" data-callback="CommentsAddTickesCallBack" data-expired-callback="CommentsAddTickesExpiredCallBack" data-error-callback="CommentsAddTickesErrorCallBack"></div>' +
        '	<br/>' +
        '</div>' +
        '<button class="ml-2 py-2 px-lg-5 px-4 bg-secondary text-white mb-3" @click="commentsSub" style="cursor: pointer">{{languageTipsList.verificationSubmitTips}}</button>' +
        '	</div>' +
        '</div>' +
        '	</div>' +
        '</div>' +
        '<div class="seoTipsModalTpl" id="seoTipsModalTpl">' +
        ' <div class="seo-tips-modal-box">' +
        ' <div class="seo-tips-modal-title">' +
        '<div><span  v-if="seoTipsModalTplShowTitle">{{seoTipsModalTplShowTitle}}</span></div>' +
        '<span class="close-seo-tip-modal" @click="seoTipsModalTplHide">×</span>' +
        ' </div>' +
        '<div class="seo-tips-modal-body">' +
        ' {{seoTipsModalTplShowContent}}' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        '</div>',
    // template:`
    // 	<div class="w-100">
    // 				<div class="logged-out">
    // 				<div class="d-flex align-items-center  pb-5">
    // 				<div class="mr-3 author-img rounded-circle d-flex align-items-center">
    // 				 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="52" viewBox="0 0 52 52">
    //                         <defs>
    //                             <circle id="a" cx="25" cy="25" r="25"/>
    //                         </defs>
    //                         <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
    //                             <mask id="b" fill="#fff">
    //                                 <use xlink:href="#a"/>
    //                             </mask>
    //                             <use fill="#E3E3E3" stroke="#E3E3E3" xlink:href="#a"/>
    //                             <g fill-rule="nonzero" mask="url(#b)">
    //                                 <path fill="#656565" d="M29.75 28.417c2.917-1.5 4.917-4.667 4.917-8.167 0-5.083-4.084-9.25-9.167-9.25a9.14 9.14 0 0 0-9.167 9.167c0 3.5 2 6.75 4.917 8.25C16.417 29.833 13 33.833 13 38h1.667c0-5 4.833-8.333 10.833-8.333S36.333 33 36.333 38H38c0-4.167-3.417-8.167-8.25-9.583zM18 20.167c0-4.167 3.333-7.5 7.5-7.5S33 16 33 20.167c0 4.166-3.333 7.5-7.5 7.5s-7.5-3.417-7.5-7.5z"/>
    //                             </g>
    //                         </g>
    //                     </svg>
    // 				</div>
    // 				<div class="right border px-3">{{languageTipsList.loginOutTipsButtonBefore}}<a class="text-secondary" @click="logInDialog">{{languageTipsList.loginOutTipsButtonBut}}</a>{{languageTipsList.loginOutTipsButtonAfter}}</div>
    // 				</div>
    // 				</div>
    //
    // 				<div class="logged-in">
    // 				<div class="d-flex align-items-center  pb-5">
    // 				<div class="mr-3 author-img" id="userAvatar" data-toggle="tooltip" @click="countLogout()" data-placement="top" :title="languageTipsList.clickLogOutButton">
    // 				<img src="http://images.wondershare.com/tpl-comments/img/comment-2.svg" style="border-radius: 50%;cursor: pointer;max-width:100%" class="img-fluid" alt=""/>
    // 				</div>
    // 				<form class="right d-flex">
    // 				<input class="border  px-3" type="text" value="" id="commentContent" :placeholder="languageTipsList.inputTips"/>
    // 				<buttom class="ml-2 px-lg-5 px-4 bg-secondary text-white" @click="submitReview" style="cursor: pointer">{{languageTipsList.reviewButton}}</buttom>
    // 				</form>
    // 				</div>
    // 				</div>
    // 				<div class="loginIn commentModal">
    // 				<div class="commentModal-dialog">
    // 				<div class="commentModal-header">
    // 				<h5 class="commentModal-title w-100 font-size-normal font-weight-medium text-center">{{languageTipsList.loginInModalTitle}}</h5>
    // 				<div class="close-modal" @click="closeModal">
    // 				<span>×</span>
    // 				</div>
    // 				</div>
    // 				<div class="commentModal-body">
    // 				<div class="wsc-footer-social text-gray-4 link-inherit d-flex py-4 justify-content-center">
    // 				<a class="mr-4 svg-icon" style="background: #4267b2" @click="faceBookClick">
    // 				    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 264 512"><path d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"></path></svg>
    // 				</a>
    //
    // 				<a class="mr-4 svg-icon" style="background: #de4d3b" @click="googlePlusClick" id="googlePlusClick">
    // 				   <svg xmlns="http://www.w3.org/2000/svg" class="wsc-svg-brand-google" fill="#fff" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
    //                     </a>
    // 				</div>
    // 				</div>
    // 				</div>
    // 				</div>
    // 				<div class="validation commentModal">
    // 				<div class="commentModal-dialog">
    // 				<div class="commentModal-header">
    // 				<h5 class="commentModal-title w-100 font-size-normal font-weight-medium text-center"></h5>
    // 				<div class="close-modal" @click="closeModal">
    // 				<span>×</span>
    // 				</div>
    // 				</div>
    // 				<div class="commentModal-body">
    // 				<div id="commentsValidation" class="text-center">
    // 				<form action="?" method="POST" class="text-center">
    // 				<div class="g-recaptcha" data-sitekey="6Ld8FKsUAAAAAMZrLI2yUPZI4NLZhU5XB-z19VDo" data-callback="CommentsAddTickesCallBack" data-expired-callback="CommentsAddTickesExpiredCallBack" data-error-callback="CommentsAddTickesErrorCallBack"></div>
    // 				<br/>
    // 				<buttom class="ml-2 py-2 px-lg-5 px-4 bg-secondary text-white mb-3" @click="commentsSub" style="cursor: pointer">{{languageTipsList.verificationSubmitTips}}</buttom>
    // 				</form>
    // 				</div>
    // 				</div>
    // 				</div>
    // 				</div>
    // 				<div class="seoTipsModalTpl" id="seoTipsModalTpl">
    //                         <div class="seo-tips-modal-box">
    //                             <div class="seo-tips-modal-title">
    //                                 <div><span  v-if="seoTipsModalTplShowTitle">{{seoTipsModalTplShowTitle}}</span></div>
    //                                 <span class="close-seo-tip-modal" @click="seoTipsModalTplHide">×</span>
    //                             </div>
    //                             <div class="seo-tips-modal-body">
    //                                 {{seoTipsModalTplShowContent}}
    //                             </div>
    //                         </div>
    //                     </div>
    // 				</div>
    // 	`,
    props: [
        "appId", "siteId", "artId", "authorId", "resourcesUrl", "language", "apiUrl", "googleId"
    ],
    data: function() {
        return {
            artCommentList: [],
            platform: "",
            content: "",
            url: this.apiUrl + "api/v2/articles/" + this.artId + "/comments",
            page_url: "",
            nickName: "",
            userId: "",
            loginStatue: false,
            avatarImg: "",
            languageTipsList: {},
            commentsCount: "",
            seoTipsModalTplShowTitle: "",
            seoTipsModalTplShowContent: ""
        }
    },
    mounted: function() {
        this.languageTipsList = languageJson[this.language]
        this.page_url = window.location.href
        resourcesUrl = this.resourcesUrl ? this.resourcesUrl : 'https://images.wondershare.com/'
        apiUrlGlobal = this.apiUrl
        artIdGlobal = this.artId
        authorIdGlobal = this.authorId

        var cssUrl = resourcesUrl + 'tpl-comments/css/comments.css'
        addCssByLink(cssUrl)

        //this.initArtCommentsList()
        // this.getReviewCount()
        this.getLoginStatus()
        this.initFacebook()

        this.initGooglePlus()

        _that = this
        jq340(".logged-in").hide()
    },
    methods: {
        seoTipsModalTplShow: function(title, content) {
            jq340("#seoTipsModalTpl").addClass("tips-show")
            this.seoTipsModalTplShowTitle = title
            this.seoTipsModalTplShowContent = content
        },
        seoTipsModalTplHide: function() {
            jq340("#seoTipsModalTpl").removeClass("tips-show")
        },
        initArtCommentsList: function() {
            jq340.ajax({
                type: 'get',
                url: this.apiUrl + "api/v2/articles/" + this.artId + "/comments",
                success: function(data) {
                    _that.artCommentList = data.data.data
                }
            })
        },
        initFacebook: function() {
            // facebook start
            window.fbAsyncInit = function() {
                FB.init({
                    appId: _that.appId,
                    cookie: false,
                    xfbml: true,
                    version: 'v3.3'
                });
                FB.AppEvents.logPageView();
            };
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s);
                js.id = id;
                js.src = "../../../connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        },
        initGooglePlus: function() {
            var googleUser = {};
            var startApp = function() {
                gapi.load('auth2', function() {
                    // Retrieve the singleton for the GoogleAuth library and set up the client.
                    auth2 = gapi.auth2.init({
                        client_id: _that.googleId,
                        cookiepolicy: 'single_host_origin',
                        scope: 'profile' //'profile' and 'email'
                    });
                    attachSignin(document.getElementById('googlePlusClick'));
                });
            };

            function attachSignin(element) {
                auth2.attachClickHandler(element, {},
                    function(googleUser) {
                        _that.loginStatue = true
                        loginStatue = true
                        var profile = auth2.currentUser.get().getBasicProfile();
                        jq340(".logged-in").show()
                        jq340(".logged-out").hide()
                        jq340("#userAvatar img").attr("src", profile.getImageUrl())
                        _that.nickName = profile.getName()
                        nickNameGlobal = profile.getName()
                        _that.content = jq340("#commentContent").val()
                        _that.platform = "google"
                        platformGlobal = "google"
                        _that.userId = profile.getId()
                        userIdGlobal = profile.getId()
                        _that.avatarImg = profile.getImageUrl()
                        _that.closeModal()
                    },
                    function(error) {
                        console.log(JSON.stringify(error, undefined, 2));
                    });
            }
            startApp();
        },
        getLoginStatus: function() {
            setTimeout(function() {
                if (typeof(FB) !== "undefined") {
                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            jq340(".logged-in").show()
                            jq340(".logged-out").hide()
                            _that.platform = "facebook"
                            platformGlobal = "facebook"
                            _that.userId = response.authResponse.userID
                            userIdGlobal = response.authResponse.userID
                            FB.api('/me?fields=email,name', function(response) {
                                FB.api(response.id + '/picture', 'GET', { "redirect": "false" }, function(pic) {
                                    _that.nickName = response.name
                                    nickNameGlobal = response.name
                                    _that.avatarImg = pic.data.url
                                    console.log(pic)
                                    console.log(response)
                                    jq340("#userAvatar img").attr("src", pic.data.url)
                                })
                                _that.loginStatue = true
                                loginStatue = true
                            });
                        } else {
                            _that.initGooglePlus()
                            _that.loginStatue = false
                            loginStatue = false
                            console.log(_that.languageTipsList.facebookLoginFail)
                        }
                    });
                } else {
                    _that.initGooglePlus()
                    console.log(_that.languageTipsList.facebookLoginFail)
                }
            }, 1000)
        },
        gmailLogin: function() { //gmail login
            this.seoTipsModalTplShow("", this.languageTipsList.developmentTips)
        },
        twitterLogin: function() { //twitter login
            this.seoTipsModalTplShow("", this.languageTipsList.developmentTips)
        },
        // getReviewCount(){
        //     jq340.ajax({
        //         type: 'get',
        //         url: this.apiUrl + "api/v2/articles/counts",
        //         data: {
        //             site_id:this.siteId,
        //             art_ids:this.artId,
        //             platform:this.platform,
        //             uid:this.userId
        //         },
        //         success: function(data){
        //             if(data.data[0]){
        //                 this.commentsCount = data.data[0].review_count
        //                 // jq340(".commentsCountBox").html(this.commentsCount)
        //             }
        //         }
        //     })
        //
        // },
        faceBookLogin: function() { //facebook login
            if (typeof(FB) !== "undefined") {
                FB.login(function(response) {
                    if (response.status === 'connected') {
                        jq340(".logged-in").show()
                        jq340(".logged-out").hide()
                        FB.api('/me?fields=email,name', function(response) {
                            FB.api(response.id + '/picture', 'GET', { "redirect": "false" }, function(pic) {
                                _that.nickName = response.name
                                nickNameGlobal = response.name
                                _that.avatarImg = pic.data.url
                                jq340("#userAvatar img").attr("src", pic.data.url)
                            })
                        });
                        _that.userId = response.authResponse.userID
                        userIdGlobal = response.authResponse.userID
                        _that.loginStatue = true
                        loginStatue = true
                    } else {
                        _that.loginStatue = false
                        loginStatue = false
                        _that.seoTipsModalTplShow("", _that.languageTipsList.facebookLoginFail)
                    }
                }, { scope: 'public_profile,email' });
            } else {
                _that.seoTipsModalTplShow("", _that.languageTipsList.facebookLoginFail)
            }
            return;
        },
        countLogout: function() {
            _that = this
            if (!(FB.logout() == undefined)) {
                console.log("face")
                FB.logout(function(response) {
                    if (response.status !== 'connected') {
                        jq340(".logged-in").hide()
                        jq340(".logged-out").show()
                        _that.loginStatue = false
                        loginStatue = false
                        _that.seoTipsModalTplShow("", _that.languageTipsList.logoutSuccessTips)
                    }
                });
            } else {
                console.log("google")
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function() {
                    jq340(".logged-in").hide()
                    jq340(".logged-out").show()
                    _that.loginStatue = false
                    loginStatue = false
                    _that.seoTipsModalTplShow("", _that.languageTipsList.logoutSuccessTips)
                });
            }
        },
        googlePlusLogin: function() {

        },
        logInDialog: function() {
            jq340(document).find(".loginIn.commentModal").addClass("show")
        },
        closeModal: function() {
            jq340(document).find(".commentModal").removeClass("show")
        },
        faceBookClick: function() {
            jq340(document).find(".commentModal").removeClass("show")
            this.faceBookLogin()
            this.platform = "facebook"
            platformGlobal = "facebook"
        },
        googlePlusClick: function() {

        },
        submitReview: function() {
            console.log(999)
            this.content = jq340("#commentContent").val()
            if (!jq340.trim(this.content)) {
                _that.seoTipsModalTplShow("", _that.languageTipsList.commentNullTips)
                return
            }
            if (gmailToken) {
                grecaptcha.reset()
            }
            jq340(document).find(".validation.commentModal").addClass("show")
        },
        commentsSub: function() {
            jq340(document).find(".validation.commentModal").removeClass("show")
            if (this.loginStatue) {
                if (gmailToken) {
                    jq340.ajax({
                        type: 'POST',
                        url: this.url,
                        data: {
                            site_id: this.siteId,
                            nick_name: this.nickName,
                            content: this.content,
                            page_url: this.page_url,
                            author_id: _that.authorId,
                            platform: this.platform,
                            uid: this.userId,
                            token: gmailToken,
                            verify_type: 2,
                            verify_domain: "wondershare.com",
                            avatar: this.avatarImg
                        },
                        success: function(data) {
                            if (data) {
                                if (data['status'] == '200') {
                                    jq340("#commentContent").val("")
                                    _that.seoTipsModalTplShow("", _that.languageTipsList.commentsSubmitSuccess)
                                } else {
                                    _that.seoTipsModalTplShow("", _that.languageTipsList.submittedFailed)
                                }
                            } else {
                                _that.seoTipsModalTplShow("", _that.languageTipsList.submittedFailed)
                            }
                        },
                        error: function() {
                            _that.seoTipsModalTplShow("", _that.languageTipsList.noVerificationTips)
                        }
                    })
                } else {
                    _that.seoTipsModalTplShow("", _that.languageTipsList.noVerificationTips)
                }
            } else {
                _that.seoTipsModalTplShow("", _that.languageTipsList.submittedFailed)
            }
        },
    }
})

new Vue({
    el: '#commentsBoxSeoTemplate'
})

function likeCount(that, a) {
    if (this.loginStatue) {
        jq340.ajax({
            type: 'post',
            url: apiUrlGlobal + "api/v2/articles/" + artIdGlobal + "/comments/" + that + "/likes",
            data: {
                site_id: siteIdGlobal,
                nick_name: nickNameGlobal,
                platform: platformGlobal,
                uid: userIdGlobal,
                author_id: authorIdGlobal,
                status: 1
            },
            success: function(data) {
                if (data.status == 200) {
                    var likeCounts = a.find("span").html()
                    console.log(likeCounts)
                    a.find("span").html(parseInt(likeCounts) + 1)
                    _that.seoTipsModalTplShow("", _that.languageTipsList.ratingsSuccess)
                } else if (data.status == 201) {
                    _that.seoTipsModalTplShow("", "Network error!")
                } else {
                    _that.seoTipsModalTplShow("", _that.languageTipsList.thumbRepeatTips)
                }
            }
        })
    } else {
        _that.seoTipsModalTplShow("", _that.languageTipsList.loginFirstTips)
    }
}

Vue.component('starScoreBox', {
    template: '<div class="" id="clickOnTheStarRatingBox">' +
        '<div class="right pb-2 d-flex justify-content-end" id="clickOnTheStarRating" @mouseleave="clickOnTheStarRating()" style="cursor: pointer">' +
        '<div class="item" @click="submitStarScore(1)" @mouseenter="chooseScore(0)">' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star"><svg class="wsc-svg-extra-star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></i>' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-half-alt"><svg class="wsc-svg-extra-star-half-alt" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 536 512"><path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path></svg></i>' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-outline" ><svg class="wsc-svg-extra-star-outline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg></i>' +
        '</div>' +
        ' <div class="item" @click="submitStarScore(2)" @mouseenter="chooseScore(1)">' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star"><svg class="wsc-svg-extra-star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></i>' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-half-alt"><svg class="wsc-svg-extra-star-half-alt" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 536 512"><path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path></svg></i>' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-outline"><svg class="wsc-svg-extra-star-outline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg></i>' +
        '</div>' +
        '<div class="item" @click="submitStarScore(3)" @mouseenter="chooseScore(2)">' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star"><svg class="wsc-svg-extra-star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></i>' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-half-alt"><svg class="wsc-svg-extra-star-half-alt" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 536 512"><path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path></svg></i>' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-outline"><svg class="wsc-svg-extra-star-outline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg></i>' +
        ' </div>' +
        '<div class="item" @click="submitStarScore(4)" @mouseenter="chooseScore(3)">' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star"><svg class="wsc-svg-extra-star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></i>' +
        ' <i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-half-alt"><svg class="wsc-svg-extra-star-half-alt" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 536 512"><path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path></svg></i>' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-outline"><svg class="wsc-svg-extra-star-outline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg></i>' +
        ' </div>' +
        '<div class="item" @click="submitStarScore(5)" @mouseenter="chooseScore(4)">' +
        '<i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star"><svg class="wsc-svg-extra-star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></i>' +
        ' <i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-half-alt"><svg class="wsc-svg-extra-star-half-alt" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 536 512"><path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path></svg></i>' +
        ' <i class="wsc-icon wsc-icon-fill ml-1" data-icon="extra-star-outline"><svg class="wsc-svg-extra-star-outline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg></i>' +
        ' </div>' +
        '</div>' +
        '<div class="mb-2 ml-2 text-gray-6 small text-right">({{languageTipsList.clickRateTips}})</div>' +
        ' <div>' +
        ' <p class="mb-0 ml-2 text-gray-6 text-right">{{languageTipsList.generallyRated}}<span class="mx-1 font-weight-medium" id="scoreTotal">4.5</span>(<span class="font-weight-medium mx-1" id="scoresNumber">22</span>{{languageTipsList.participatedTips}})</p>' +
        '</div>' +
        ' </div>',
    props: [
        "apiUrl",
        "artId",
        "siteId",
        "language"
    ],

    data: function() {
        return {
            languageTipsList: {},
            seoTipsModalTplShowTitle: "",
            seoTipsModalTplShowContent: ""
        }
    },
    created: function() {
        this.getScoresNumbers()
        siteIdGlobal = this.siteId
    },
    mounted: function() {
        this.languageTipsList = languageJson[this.language]
    },
    methods: {
        seoTipsModalTplShow: function(title, content) {
            jq340("#seoTipsModalTpl").addClass("tips-show")
            this.seoTipsModalTplShowTitle = title
            this.seoTipsModalTplShowContent = content
        },
        chooseScore: function(that) {
            _that = this
            var itemLength = 5
            var hoverIndex = that
            for (var i = 0; i <= hoverIndex; i++) {
                jq340("#clickOnTheStarRating").find(".item").eq(i).find("i:nth-child(1)").show()
                jq340("#clickOnTheStarRating").find(".item").eq(i).find("i:nth-child(2)").hide()
                jq340("#clickOnTheStarRating").find(".item").eq(i).find("i:nth-child(3)").hide()
            }
            for (var a = itemLength; a > hoverIndex; a--) {
                jq340("#clickOnTheStarRating").find(".item").eq(a).find("i:nth-child(1)").hide()
                jq340("#clickOnTheStarRating").find(".item").eq(a).find("i:nth-child(2)").hide()
                jq340("#clickOnTheStarRating").find(".item").eq(a).find("i:nth-child(3)").show()
            }
        },
        getScoresNumbers: function() {
            var _that = this
            jq340.ajax({
                type: 'get',
                url: this.apiUrl + "api/v2/articles/" + this.artId + "/ratings?site_id=" + this.siteId,
                success: function(data) {
                    jq340("#clickOnTheStarRatingBox").find("#scoresNumber").html(data.data.voter_total)
                    jq340("#clickOnTheStarRatingBox").find("#scoreTotal").html(data.data.rating_averages)
                    var score = data.data.rating_averages

                    if (score > Math.floor(score) && score < Math.ceil(score)) {
                        _that.getStartNum(score)
                        jq340("#clickOnTheStarRating").find(".item").eq(Math.ceil(score) - 1).find("i:nth-child(1)").hide()
                        jq340("#clickOnTheStarRating").find(".item").eq(Math.ceil(score) - 1).find("i:nth-child(2)").show()
                        jq340("#clickOnTheStarRating").find(".item").eq(Math.ceil(score) - 1).find("i:nth-child(3)").hide()

                        jq340("#starLook").find(".item").eq(Math.ceil(score) - 1).find("i:nth-child(1)").hide()
                        jq340("#starLook").find(".item").eq(Math.ceil(score) - 1).find("i:nth-child(2)").show()
                        jq340("#starLook").find(".item").eq(Math.ceil(score) - 1).find("i:nth-child(3)").hide()
                    } else {
                        _that.getStartNum(score)
                    }
                }
            })
        },
        getStartNum: function(num) {
            jq340("#clickOnTheStarRating").find(".item i").hide()
            jq340("#clickOnTheStarRating").find(".item i:nth-child(3)").show()
            for (var i = 0; i <= num; i++) {
                jq340("#clickOnTheStarRating").find(".item").eq(i).find("i:nth-child(1)").show()
                jq340("#clickOnTheStarRating").find(".item").eq(i).find("i:nth-child(3)").hide()
                jq340("#starLook").find(".item").eq(i).find("i:nth-child(1)").show()
                jq340("#starLook").find(".item").eq(i).find("i:nth-child(3)").hide()
            }
        },
        clickOnTheStarRating: function() {
            this.getScoresNumbers()
        },
        submitScores: function(index) {
            _that = this
            var scoresNumberText = jq340("#clickOnTheStarRatingBox").find("#scoresNumber").html()
            jq340("#clickOnTheStarRatingBox").find(".scoresNumber").html(parseInt(scoresNumberText) + 1)
            jq340.ajax({
                type: 'post',
                url: "https://i.wondershare.com/api/v2/articles/" + _that.artId + "/ratings",
                data: {
                    site_id: _that.siteId,
                    num: index
                },
                success: function(data) {
                    console.log(data)
                    if (data.status == "200") {
                        jq340("#seoTipsModalTpl .seo-tips-modal-body").html(languageJson[_that.language].ratingsSuccess)
                        _that.seoTipsModalTplShow("", "")
                        _that.getScoresNumbers()
                    } else {
                        jq340("#seoTipsModalTpl .seo-tips-modal-body").html(languageJson[_that.language].commentedTips)
                        _that.seoTipsModalTplShow("", "")
                    }
                },
            })
        },
        submitStarScore: function(index) {
            this.submitScores(index)
        }
    }
})
new Vue({
    el: '#starScoreBoxTemplateId'
})