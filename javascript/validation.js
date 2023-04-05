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

// $(function(){
//     $("#drop_menu_btn").on("click", function() {
//         $("#drop_menu").toggle("500", "swing")
//     })
// });
// $(function() {
//     const button = $("#drop_menu_btn");
//     const menu = $("#drop_menu");
//     button.click(function(){
//       menu.toggle("500", "swing")
//     });
//   })
// 「送信」ボタン押下時の処理を作成
// function add(){
//     // form要素を取得
//     const forms = document.forms; //複数あるform要素のどの要素に対してイベントハンドラを登録するかを特定する必要があるためインデックスを指定
//     // メッセージ表示のための要素をform要素に追加
//     // 取得したform要素に対して「送信」のイベントハンドラを登録
//     forms[0].onsubmit = function(){   
//         if(forms[0].email.value!== forms[0].email_confirm.value){
//             const element = document.createElement("p")  
//             const message = document.createTextNode("Eメールが一致しません")
//             element.appendChild(message);
//             forms[0].appendChild(element);
//             message.classList.add("alert"); 
//             return false;
//         }
//     };
// };

// window.onload = add;

// function emailValidation() {
//     const form = document.getElementById("form");  //--1
//     form.onsubmit = function() { //--2
//       if(form.email.value !== form.email_confirm.value) { //--3
//         const element = document.createElement("p") //--4
//         const message = document.createTextNode("Eメールが一致しません") //--5
//         element.appendChild(message); //--6
//         form.appendChild(element); //--7
//         return false;  //--8
//       }
//     };
//   };
  
//   window.onload = emailValidation;



// 入力フォームに入力された値を取得

// 「送信」ボタン押下時の処理を作成
// function submitt(){
//     const forms = document.forms;
//     debugger
//     forms.onsubmit = function(){
//         if(forms.email.value !== form.email_confirm.value){
//             const element = document.createElement("p");
//             const parentElement = document.getElementById("form")[0];
//             parentElement.appendChild(element);
//             element.innerText = "メールアドレスが一致しません";
//         } else {
//             const element = document.createElement("p");
//             const parentElement = document.getElementById("form")[0];
//             parentElement.appendChild(element);
//             element.innerText = "メールアドレスが一致します";
//         };    
//     };
// }

// function submitt() {
//     const forms = document.forms;
//     const email = forms[0].email;
//     const email2 = forms[0].email_confirm;
//     forms.onsubmit = function() { //--2
//       if(!(email === email2)) { //--3
//         const element = document.createElement("p") //--4
//         const message = document.createTextNode("Eメールが一致しません") //--5
//         element.appendChild(message); //--6
//         form.appendChild(element); //--7
//         return false;  //--8
//       }
//     };
//   };



// window.onload = submitt;


// function emailValidation() {
//     const form = document.forms;  //--1
//     const email = form[0].email;
//     const email2 = form[0].email_confirm;
//     form.onsubmit = function() { //--2
//       if(!(email === email2)) { //--3
//         const element = document.createElement("p") //--4
//         const message = document.createTextNode("Eメールが一致しません") //--5
//         element.appendChild(message); //--6
//         form.appendChild(element); //--7
//         return false;  //--8
//       }
//     };
//     console.log(form[0].email);
//     console.log(email);
//   };
  
//   window.onload = emailValidation;


