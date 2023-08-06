//Sidebar
const menuItems = document.querySelectorAll('.menu-items');
const messagesNotification=document.querySelector('#Message-Notifications');
const messages=document.querySelector('.Messages');
const message=document.querySelectorAll('.Message');
const messageSearch=messages.querySelector('.Message-search');
const themeBar=document.querySelector('#Theme-bar');
const theme=document.querySelector('#Theme');
const colorPalette=document.querySelectorAll('#Colorpalette');
const root=document.querySelector(':root');

//sidebar
menuItems.forEach(item =>{
    item.addEventListener('click',()=>{
        //item.classList.add('items-clicked');
        if(item.id=='Notifications'){
            document.querySelector('#Notifications-popup').classList.toggle('collapse');
            document.querySelector('.Notifications-count').classList.add('collapse');
        }
        
    })
})

//message-section
//highlight message area
messagesNotification.addEventListener('click',()=>{
    messages.classList.add('highlight');
    messagesNotification.querySelector('.Notifications-count').classList.add('collapse');  
    setTimeout(()=>{
        messages.classList.remove('highlight');
    },2000);
})
//search messages
messageSearch.addEventListener('keyup',()=>{
    const val=messageSearch.value.toLowerCase();
    message.forEach(chat=>{
        let name=chat.querySelector('.font-semibold').textContent.toLowerCase();
        if(name.includes(val)){
            chat.classList.remove('hidden');
        }
        else{
            chat.classList.add('hidden');
        }
    })
})


//Theme customization
themeBar.addEventListener('click',()=>{
    theme.classList.remove('collapse');
})
theme.addEventListener('click',(e)=>{
    if(e.target.classList.contains('customize-theme')){
        theme.classList.add('collapse');
    }
})
colorPalette.forEach(color =>{
    color.addEventListener('click',()=>{
        if(color.classList.contains('bg-purple-600')){
            root.style.setProperty('--buttoncolor','#9333ea');
        }else if(color.classList.contains('bg-yellow-600')){
            root.style.setProperty('--buttoncolor','#ca8a04');
        }else if(color.classList.contains('bg-red-600')){
            root.style.setProperty('--buttoncolor','#dc2626');
        }else if(color.classList.contains('bg-green-600')){
            root.style.setProperty('--buttoncolor','#16a34a');
        }else if(color.classList.contains('bg-blue-600')){
            root.style.setProperty('--buttoncolor','#2563eb');
        }
    })
})

theme.querySelectorAll('button').forEach(color => {
    color.addEventListener('click',()=>{
        if(color.classList.contains('light')){
            root.style.setProperty('--basecolor','#e9d5ff');
            root.style.setProperty('--boxcolor','#faf5ff');
            root.style.setProperty('--textcolor1','#000000');
        }
        else if(color.classList.contains('dim')){
            root.style.setProperty('--basecolor','#342d53');
            root.style.setProperty('--boxcolor','#493e74');
            root.style.setProperty('--textcolor1','#f0eef6');
        }
        else if(color.classList.contains('dark')){
            root.style.setProperty('--basecolor','#212121');
            root.style.setProperty('--boxcolor','#424242');
            root.style.setProperty('--textcolor1','#f0eef6');
        }
    })    
});
