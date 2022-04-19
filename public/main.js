const topMenu = document.getElementById('cus-top-menu-item')
const toggleTopMenuIcon = document.getElementById('cus-top-menu-item-toggle')

document.addEventListener('click', (e) => {
        if(toggleTopMenuIcon.contains(e.target)){
            //Click toggle menu Icon
            topMenu.classList.toggle('cus-top-menu-expanded')
            topMenu.classList.toggle('hidden')
        }else{
            //Click outside icon Top Menu
            if(topMenu.classList.contains('cus-top-menu-expanded')){
                topMenu.classList.remove('cus-top-menu-expanded')
                topMenu.classList.add('hidden')
            }
            
        }
    }
)