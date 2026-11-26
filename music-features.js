(() => {
  const artists = [
    {name:"Pritam", img:"images/s1.jpg", bio:"Bollywood composer known for memorable melodies.", songs:["Kesariya","Channa Mereya","Tum Se Hi","Ae Dil Hai Mushkil","Hawayein"], albums:["Brahmāstra","Ae Dil Hai Mushkil","Jab Harry Met Sejal"], radio:"Pritam Radio", playlist:"This Is Pritam"},
    {name:"A. R. Rahman", img:"images/s2.jpg", bio:"Composer and producer blending Indian classical and contemporary sounds.", songs:["Agar Tum Saath Ho","Kun Faya Kun","Jai Ho","Tere Bina","Maa Tujhe Salaam"], albums:["Rockstar","Rang De Basanti","Jodhaa Akbar"], radio:"A. R. Rahman Radio", playlist:"This Is A. R. Rahman"},
    {name:"Sachin-Jigar", img:"images/s3.jpg", bio:"Composer duo behind vibrant film soundtracks.", songs:["Apna Bana Le","Tere Vaaste","Love You Zindagi","Jeena Jeena","Aaj Kal Zindagi"], albums:["Bhediya","Zara Hatke Zara Bachke","ABCD 2"], radio:"Sachin-Jigar Radio", playlist:"This Is Sachin-Jigar"},
    {name:"Arijit Singh", img:"images/s4.jpg", bio:"Singer celebrated for expressive vocals and romantic hits.", songs:["Tum Hi Ho","Kesariya","Chaleya","Phir Le Aya Dil","Satranga"], albums:["Aashiqui 2","Brahmāstra","Animal"], radio:"Arijit Singh Radio", playlist:"This Is Arijit Singh"},
    {name:"Shreya Ghoshal", img:"images/s5.jpg", bio:"Award-winning vocalist across Indian languages.", songs:["Saibo","Teri Ore","Deewani Mastani","Param Sundari","Jaadu Hai Nasha Hai"], albums:["Devdas","Jab We Met","Bajirao Mastani"], radio:"Shreya Ghoshal Radio", playlist:"This Is Shreya Ghoshal"},
    {name:"Anirudh Ravichander", img:"images/s6.jpg", bio:"Composer and vocalist known for energetic film music.", songs:["Why This Kolaveri Di","Arabic Kuthu","Hukum","Hayyoda","Chellamma"], albums:["Jailer","Leo","Master"], radio:"Anirudh Radio", playlist:"This Is Anirudh"},
    {name:"Neha Kakkar", img:"images/s8.jpg", bio:"Popular playback singer with upbeat pop hits.", songs:["Dilbar","Aankh Marey","O Saki Saki","Garmi","Kala Chashma"], albums:["Satyameva Jayate","Street Dancer 3D"], radio:"Neha Kakkar Radio", playlist:"This Is Neha Kakkar"},
    {name:"Sunidhi Chauhan", img:"images/s9.jpg", bio:"Powerhouse vocalist known for dynamic performances.", songs:["Sheila Ki Jawani","Kamli","Beedi","Darkhaast","Crazy Kiya Re"], albums:["Dhoom 2","Race","Tees Maar Khan"], radio:"Sunidhi Chauhan Radio", playlist:"This Is Sunidhi Chauhan"},
    {name:"Sanjith Hegde", img:"images/s10.jpg", bio:"Indian playback singer known for Kannada and Telugu songs.", songs:["Gunu Gunuguva"," kollabeda","Ninna Snehadinda","Maadeva","Sakath"], albums:["Kirik Party","Salaga"], radio:"Sanjith Hegde Radio", playlist:"This Is Sanjith Hegde"},
    {name:"Sunitha Upadrasta", img:"images/s11.jpg", bio:"Acclaimed playback singer and television host.", songs:["Ee Velalo Neevu","Neeli Meghamula Lo","Naa Hrudayamlo","Andamaina Kalala"], albums:["Anand","Godavari"], radio:"Sunitha Radio", playlist:"This Is Sunitha"},
    {name:"Asees Kaur", img:"images/s12.jpg", bio:"Singer known for soulful Bollywood and independent tracks.", songs:["Raatan Lambiyan","Makhna","Ve Maahi","Akh Lad Jaave","Gal Karke"], albums:["Shershaah","Good Newwz"], radio:"Asees Kaur Radio", playlist:"This Is Asees Kaur"},
    {name:"Armaan Malik", img:"images/s14.jpg", bio:"Singer-songwriter known for pop and film music.", songs:["Bol Do Na Zara","Main Rahoon Ya Na Rahoon"," control","Butta Bomma","You"], albums:["Jersey","M.S. Dhoni: The Untold Story"], radio:"Armaan Malik Radio", playlist:"This Is Armaan Malik"}
  ];
  const albums = [
    {name:"ANIMAL", by:"Manan Bhardwaj, Vishal Mishra, Jaani", img:"https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9", songs:["Hua Main","Satranga","Pehle Bhi Main","Arjan Vailly"]},
    {name:"Still Rollin",by:"Shubh",img:"https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0",songs:["Still Rollin","Cheques","Elevated","Offshore"]},
    {name:"Brahmāstra",by:"Pritam, Arijit Singh",img:"https://i.scdn.co/image/ab67616d0000b2730d3449f333a83a25feb423f8",songs:["Kesariya","Deva Deva","Rasiya","Dance Ka Bhoot"]}
  ];
  const playlists = [
    {name:"Today's Top Hits",desc:"The biggest songs right now.",img:"images/item-1.jpg",songs:["Espresso","Aaj Ki Raat","Husn","Beautiful Things"]},
    {name:"Punjabi 101",desc:"The biggest Punjabi hits.",img:"images/item-2.jpg",songs:["Winning Speech","Softly","Cheques","With You"]},
    {name:"Bollywood Butter",desc:"Hindi music to get you moving.",img:"images/item-3.jpg",songs:["Aaj Ki Raat","Tauba Tauba","Akhiyaan Gulaab","Sajni"]},
    {name:"Indie India",desc:"Fresh sounds from Indian indie artists.",img:"images/item-4.jpg",songs:["Husn","Heeriye","Baarishein","Alag Aasmaan"]}
  ];
  const radios = artists.slice(0,8).map(a=>({name:a.radio,desc:"A mix based on "+a.name+".",img:a.img,songs:a.songs.slice(0,4)}));
  const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const main=document.querySelector(".main-section");
  if(!main) return;
  const style=document.createElement("style");
  style.textContent=`
  .music-extra{padding:18px 40px 30px;color:#fff}.music-extra h2{font-size:24px;margin:12px 0 18px}.music-extra .music-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:16px}.music-extra .music-card{background:#202020;border-radius:9px;padding:12px;cursor:pointer;transition:.2s;min-width:0}.music-extra .music-card:hover{background:#303030;transform:translateY(-2px)}.music-extra .music-card img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:7px;margin-bottom:10px}.music-extra .music-card h3{font-size:15px;margin:2px 0 7px}.music-extra .music-card p{color:#aaa;font-size:13px;line-height:1.4}.music-extra .music-section{margin:28px 0}.spotify-overlay{position:fixed;inset:0;z-index:9999;background:#101010;color:#fff;overflow:auto;display:none}.spotify-overlay.show{display:block}.spotify-overlay .overlay-top{height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;background:#090909;position:sticky;top:0}.spotify-overlay button{border:0;cursor:pointer}.spotify-overlay .close-overlay{background:#242424;color:white;border-radius:50%;width:38px;height:38px;font-size:22px}.spotify-overlay .detail-hero{padding:42px 6vw 30px;display:flex;align-items:end;gap:28px;background:linear-gradient(transparent,#151515),linear-gradient(120deg,#475569,#151515);min-height:260px}.spotify-overlay .detail-hero img{width:210px;height:210px;object-fit:cover;box-shadow:0 8px 35px #0008;border-radius:6px}.spotify-overlay .detail-hero .round{border-radius:50%}.spotify-overlay .detail-hero small{font-weight:700}.spotify-overlay .detail-hero h1{font-size:clamp(34px,6vw,68px);margin:10px 0}.spotify-overlay .detail-body{padding:24px 6vw 60px}.spotify-overlay .detail-body h2{margin:20px 0}.spotify-overlay .track{display:grid;grid-template-columns:30px 1fr auto;align-items:center;gap:15px;padding:10px 12px;border-radius:5px;cursor:pointer}.spotify-overlay .track:hover{background:#ffffff18}.spotify-overlay .track .muted{color:#aaa;font-size:13px}.spotify-overlay .track .track-no{color:#aaa}.spotify-overlay .detail-chips{display:flex;gap:10px;flex-wrap:wrap;margin:18px 0}.spotify-overlay .detail-chips span{background:#292929;padding:9px 14px;border-radius:20px;color:#ddd;font-size:13px}.spotify-overlay .detail-chips .related-link{cursor:pointer}.spotify-overlay .detail-chips .related-link:hover{background:#444;color:#fff}.song-screen{position:fixed;inset:0;background:linear-gradient(145deg,#243b36,#101010 70%);z-index:10001;display:none;overflow:auto;color:white}.song-screen.show{display:flex;flex-direction:column}.song-screen .song-top{display:flex;justify-content:space-between;align-items:center;padding:24px 32px}.song-screen .song-top button{background:#ffffff18;color:white;border-radius:50%;width:42px;height:42px;font-size:20px}.song-screen .song-content{margin:auto;width:min(520px,88vw);text-align:center;padding:25px 0 60px}.song-screen .song-content img{width:min(390px,75vw);aspect-ratio:1;object-fit:cover;border-radius:8px;box-shadow:0 20px 70px #0009}.song-screen h1{font-size:clamp(26px,5vw,40px);margin:25px 0 8px}.song-screen p{color:#c7c7c7;font-size:17px}.song-screen .static-progress{height:4px;background:#ffffff35;border-radius:9px;margin:32px 0 10px}.song-screen .static-progress span{display:block;width:36%;height:100%;background:#fff;border-radius:9px}.song-screen .no-audio{font-size:12px;color:#bdbdbd;margin-top:28px}.song-screen .song-meta{display:flex;justify-content:space-between;color:#bdbdbd;font-size:12px}.song-screen .visual-controls{display:flex;justify-content:center;gap:34px;align-items:center;margin-top:24px;color:#bdbdbd;font-size:22px}.song-screen .visual-controls .fake-play{width:58px;height:58px;background:#fff;color:#111;border-radius:50%;display:grid;place-items:center;font-size:23px}.song-screen .visual-controls span{cursor:default}@media(max-width:700px){.music-extra{padding:15px}.spotify-overlay .detail-hero{align-items:center;flex-direction:column;text-align:center;padding:28px 18px}.spotify-overlay .detail-hero img{width:175px;height:175px}.spotify-overlay .detail-body{padding:20px 16px}.song-screen .song-top{padding:16px}.music-extra .music-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}`;
  document.head.appendChild(style);
  const extra=document.createElement("section"); extra.className="music-extra";
  const section=(title,items,type)=>`<div class="music-section"><h2>${title}</h2><div class="music-grid">${items.map((x,i)=>`<article class="music-card" data-type="${type}" data-index="${i}"><img src="${esc(x.img)}" alt=""><h3>${esc(x.name)}</h3><p>${esc(x.desc||x.by|| (type==="artist"?"Artist":type==="radio"?"Radio":"Playlist"))}</p></article>`).join("")}</div></div>`;
  extra.innerHTML=section("Discover artists",artists.map(a=>({...a,desc:"Artist"})),"artist")+section("Popular albums",albums,"album")+section("Made for music fans",playlists,"playlist")+section("Artist radios",radios,"radio");
  const footer=main.querySelector(".footer-section");
  main.insertBefore(extra,footer||null);
  const overlay=document.createElement("div");overlay.className="spotify-overlay";overlay.innerHTML=`<div class="overlay-top"><strong>♫ Your music</strong><button class="close-overlay" aria-label="Close">×</button></div><div class="detail-content"></div>`;
  document.body.appendChild(overlay);
  const songScreen=document.createElement("div");songScreen.className="song-screen";songScreen.innerHTML=`<div class="song-top"><span>♫ NOW VIEWING</span><button class="song-close" aria-label="Close">×</button></div><div class="song-content"><img class="song-cover" src="" alt="Album cover"><h1 class="song-title"></h1><p class="song-artist"></p><div class="static-progress"><span></span></div><div class="song-meta"><span>0:00</span><span>Song preview display</span></div><div class="visual-controls"><span>⏮</span><span class="fake-play">Ⅱ</span><span>⏭</span></div><div class="no-audio">Playback is disabled in this project. This is a visual song screen only.</div></div>`;
  document.body.appendChild(songScreen);
  const openSong=(name,by,img)=>{songScreen.querySelector(".song-title").textContent=name;songScreen.querySelector(".song-artist").textContent=by;songScreen.querySelector(".song-cover").src=img;songScreen.classList.add("show");};
  songScreen.querySelector(".song-close").onclick=()=>songScreen.classList.remove("show");
  const renderDetail=(item,type)=>{
    let title=item.name,sub=item.bio||item.desc||item.by||"";
    let img=item.img||"images/s1.jpg";
    let songs=item.songs||[];
    const tracks=songs.map((s,i)=>`<div class="track" data-song="${esc(s)}" data-by="${esc(title)}" data-img="${esc(img)}"><span class="track-no">${i+1}</span><div><div>${esc(s)}</div><div class="muted">${esc(title)}</div></div><span class="muted">•••</span></div>`).join("");
    const related=type==="artist"?`<h2>Albums, radio & playlists</h2><div class="detail-chips"><span class="related-link" data-related="radio">${esc(item.radio)}</span><span class="related-link" data-related="playlist">${esc(item.playlist)}</span>${item.albums.map(a=>`<span class="related-link" data-album="${esc(a)}">${esc(a)}</span>`).join("")}</div>`:"";
    overlay.querySelector(".detail-content").innerHTML=`<div class="detail-hero"><img class="${type==='artist'?'round':''}" src="${esc(img)}" alt=""><div><small>${type.toUpperCase()}</small><h1>${esc(title)}</h1><p>${esc(sub)}</p></div></div><div class="detail-body"><h2>${type==="artist"?"Popular songs":"Track list"}</h2>${tracks||'<p class="muted">Track listing coming soon.</p>'}${related}<p style="color:#aaa;margin-top:24px;font-size:13px">Select any song to open its full-screen display. Audio playback is not enabled.</p></div>`;
    overlay.classList.add("show");
    overlay.querySelectorAll(".track").forEach(t=>t.addEventListener("click",()=>openSong(t.dataset.song,t.dataset.by,t.dataset.img)));
    overlay.querySelectorAll(".related-link").forEach(chip=>chip.addEventListener("click",()=>{
      if(chip.dataset.related==="radio") renderDetail({name:item.radio,desc:"A mix inspired by "+item.name,img:item.img,songs:item.songs.slice(0,4)},"radio");
      else if(chip.dataset.related==="playlist") renderDetail({name:item.playlist,desc:"A collection of songs by "+item.name,img:item.img,songs:item.songs},"playlist");
      else {const albumName=chip.dataset.album;renderDetail({name:albumName,by:item.name,img:item.img,songs:item.songs.slice(0,4)},"album");}
    }));
  };
  overlay.querySelector(".close-overlay").onclick=()=>overlay.classList.remove("show");
  extra.querySelectorAll(".music-card").forEach(card=>card.addEventListener("click",()=>{const type=card.dataset.type,i=+card.dataset.index;renderDetail(({artist:artists,album:albums,playlist:playlists,radio:radios})[type][i],type)}));
  document.querySelectorAll(".spotify-playlist .card .item,.spotify-playlist .card .item1").forEach(card=>{
    card.addEventListener("click",()=>{
      const h=card.querySelector("h4")?.textContent?.trim()||"Song collection";
      const p=card.querySelector("p")?.textContent?.trim()||"Artist";
      const image=card.querySelector("img")?.getAttribute("src")||"images/s1.jpg";
      const artist=artists.find(a=>a.name.toLowerCase()===h.toLowerCase());
      if(artist) renderDetail(artist,"artist");
      else {
        const match=albums.find(a=>a.name.toLowerCase()===h.toLowerCase());
        renderDetail(match||{name:h,by:p,img:image,songs:["Track 01","Track 02","Track 03","Track 04"]},"album");
      }
    });
  });
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){overlay.classList.remove("show");songScreen.classList.remove("show")}});
})();