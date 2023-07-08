// second slide - web app

const back = document.querySelector('#back');
const next = document.querySelector('#next');

const images = ["https://images.unsplash.com/photo-1529154036614-a60975f5c760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbHklMjBSb21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", "https://plus.unsplash.com/premium_photo-1676188130387-c4a47e2d4e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXRhbHklMjBSb21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbHklMjBSb21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1586975303199-8c54f3ee97f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGl0YWx5JTIwbGFnbyUyMGNvbW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbHklMjBmbG9yZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1496324839965-d6281225d8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGl0YWx5JTIwZmxvcmVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", "https://plus.unsplash.com/premium_photo-1661962548415-90d0fc474259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGl0YWx5JTIwbWlsYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", "https://plus.unsplash.com/premium_photo-1677478679550-a90cbd7f18c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGl0YWx5JTIwbWlsYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"];
let i = 0;
next.addEventListener('click', () => {
    i++;
    if(i > images.length - 1) {
        i = 0;
    }
    document.querySelector('#pictures').src = images[i];
})

back.addEventListener('click', () => {
    i --;
    if(i < 0 ) {
        i = images.length - 1;
    }
    document.querySelector('#pictures').src = images[i];
})
