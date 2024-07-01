function displayList() {
    const fruitsDiv = document.querySelector('#fruits');
    console.log("クリックされました")
    // fruitsDiv.textContent = "こんばんは"
    fruitsDiv.innerHTML = `
    <ul>
        <li>リンゴ</li>
        <li>イチゴ</li>
        <li>ブドウ</li>
    </ul>`;
}