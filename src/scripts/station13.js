function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (check.checked) {
    console.log("チェックされた！")
    text.style.backgroundColor = "red"
  } else {
    console.log("外れた")
    text.style.backgroundColor = ""
  }
}