// $(function () {
//   /*=================================================
//   ハンバーガーメニュー
//   ===================================================*/
//   // ハンバーガーメニューのクリックイベント
//   $(".toggle_btn").on("click", function () {
//     // #headerにopenクラスが存在する場合
//     if ($("#header").hasClass("open")) {
//       // openクラスを削除
//       // openクラスを削除すると、openクラスのCSSがはずれるため、
//       // メニューが非表示になる
//       $("#header").removeClass("open");
//       // #headerにopenクラスが存在しない場合
//     } else {
//       // openクラスを追加
//       // openクラスを追加すると、openクラスのCSSが適応されるため、
//       // メニューが表示される
//       $("#header").addClass("open");
//     }
//   });

//   // メニューが表示されている時に画面をクリックした場合
//   $("#mask").on("click", function () {
//     // openクラスを削除して、メニューを閉じる
//     $("#header").removeClass("open");
//   });
// });
// window.addEventListener("load", function () {
//   console.log("load：リソースファイルを全て読み込みました。");
"use strict";
{
  const hamburgerMenu = document.querySelector(".toggle_btn");

  const navi = document.getElementById("header");

  hamburgerMenu.addEventListener("click", function () {
    navi.classList.toggle("open");
  });

  document.getElementById("mask").addEventListener("click", function () {
    navi.classList.remove("open");
  });
}
