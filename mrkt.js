let ItemsDiv = document.getElementById("items");

if (ItemsDiv) {
    console.log(ItemsDiv)

    console.log('Поле classList', ItemsDiv.classList)
    console.log('Поле id', ItemsDiv.id)
    console.log('Поле clientWidth', ItemsDiv.clientWidth)
    console.log('Поле innerHTML', ItemsDiv.innerHTML)

    ttl = ["Один", "Два", "Три", "Чотири", "П'ять"] 
    const items_num = ttl.length;
    for (let x = 0; x < items_num; x++) {
        const item_name = ttl[x]
        ItemsDiv.innerHTML += '<div class="item">'+ item_name +'</div>';
    }
    
} else {
    console.log('Блок не знайдено')
}
