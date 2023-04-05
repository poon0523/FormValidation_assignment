//イベントの登録
function emailValidation() {
    //【1】Eメール（確認）入力時の処理
    //【1】- 1：イベント登録に必要な変数定義
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const confirm = document.getElementById('email_confirm');
    const emaiConfirm_fail = document.getElementById('contact_content');
    const confirm_parent = document.getElementById('parent'); //tbody要素が省略されていたためHTMLに追加の上、左記idを指定
    const element = document.createElement('p');
    element.setAttribute("id", "element");
    const message = document.createTextNode("Eメールが一致しません");
    //【1】- 2：Eメール（確認）入力時の処理をイベントリスナ関数に記述
    confirm.addEventListener('input',function(){
        if(confirm.value !== email.value){
            if(!document.getElementById('element')){ //入力の度、新規で同じメッセージが表示されることを防止するための処理
            //Eメール（確認）の背景を赤色にするCSSを追加
            confirm.classList.add("confirm_alert");
            //Eメール（確認）の下にメールアドレスが不一致であることのメッセージを追加
            confirm_parent.insertBefore(element,emaiConfirm_fail);
            element.appendChild(message);
            element.classList.add("alert_message");
            };
        } else{ //正しいアドレスが入力された時の表示を制御（※この処理がないと正しいアドレスを入力しても正しくない時の表示のままとなる）
            confirm.classList.remove("confirm_alert");
            confirm_parent.removeChild(element);
        };
    });

    //【2】「送信」ボタン押下時の処理
    form.addEventListener('submit', function(e) {
      // 条件分岐の前にsubmit処理をキャンセル
      e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {
        const element = document.createElement('p')
        const message = document.createTextNode("Eメールが一致しません")
        form.appendChild(element);
        element.appendChild(message);
        element.classList.add("alert");
        setTimeout(function() {
          form.removeChild(element);
        }, 3000);
      } else {
        // 一致した場合は再度submitを行う
        form.submit();
      }
    });
  };
  
  window.onload = emailValidation;
