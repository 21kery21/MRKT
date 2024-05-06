function EItem(item) {
    item.style.transform = 'scale(0.95)';
}

function SItem(item) {
    item.style.transform = 'scale(1)';
}


let ItemsDiv = document.getElementById("items");

if (ItemsDiv) {
    console.log(ItemsDiv)

    console.log('Поле classList', ItemsDiv.classList)
    console.log('Поле id', ItemsDiv.id)
    console.log('Поле clientWidth', ItemsDiv.clientWidth)
    console.log('Поле innerHTML', ItemsDiv.innerHTML)

    let num = 1
    ttl = ["Один", "Два", "Три", "Чотири", "П'ять"]
    const items_num = ttl.length;
    for (let x = items_num - 5; x < 5; x++) {
        const item_name = ttl[x]
        ItemsDiv.innerHTML += '<div class="item">'+ item_name +'</div>';
        num += 1
    }
    
} else {
    console.log('Блок не знайдено')
}
