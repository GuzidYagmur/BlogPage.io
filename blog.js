let blogs = [];
if(localStorage.blogs){
    blogs = JSON.parse(localStorage.blogs);
}

function addBlog() {
    const name = prompt("İsminiz nedir?");
    const surname = prompt("Soyisminiz nedir?");
    const blogName = prompt("Blog başlığınız nedir?");
    const blogText = prompt("Blog yazınızı yazınız.");

    blogs.push({
        name,
        surname,
        blogName,
        blogText
    });

    localStorage.blogs = JSON.stringify(blogs);
    return nextAction();
    }

    function findBlog() {
        const findBlogTitle = prompt("Görüntülemek istediğiniz blog'un başlığı nedir?");
        let found = false; 
        for (let b of blogs) {
            if (findBlogTitle === b.blogName) {
                alert("Blog Başlığı: " + b.blogName + "\nYazı: " + b.blogText);
                found = true;
                break; 
            }
        }
        if (!found) {
            alert("Bu başlıkta bir blog bulunamadı.");
        }
        return nextAction();
    }
    

    function mainMenu(){
        const value = isAccepted("Yapmak istediginiz islemi seciniz. \n 1-Blog Ekle \n 2-Blog Ara ", "1","2");
        if(value==1){
             return addBlog();
        }
        else if(value==2){
           return findBlog();
        } 
    }

    function isAccepted(msg, ...keys){
        const value = prompt(msg);
      if (keys.includes(value)) {
        return value;
      }else {
        alert("Hatali tuslama yaptiniz.");
        return isAccepted(msg, ...keys);
      }
    }

    function nextAction(){
        const value = isAccepted("Baska bir islem yapmak ister misiniz? (e/h)", "e", "h","E","H");
        if (value.toLowerCase() === "e") {
            return mainMenu();
        }else {
            alert("Güle Güle....");
            return;
        }
    }

    mainMenu();
    console.log(blogs);
