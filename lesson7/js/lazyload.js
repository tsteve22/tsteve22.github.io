            window.addEventListener('load',(event)=>{
                const images = document.querySelectorAll("[data-src]");
                //console.log(images)
                function preLoadImage(img){
                    console.log("trying to load"+img);
                    const src= img.getAttribute("data-src");
                    if(!src){
                        return;
                    }
                    img.src = src;
                }
                const imgOptions = {
                    threshold:0,
                    rootMargin: "0px 0px 200px 0px"
                }
                const imgObserver = new IntersectionObserver(( entries, imgObserver)=>{
                console.log(entries);
                entries.forEach(entry=>{
                    if(!entry.isIntersecting){
                        return;
                    }
                    else{
                        preLoadImage(entry.target);
                        imgObserver.unobserve(entry.target);
                    }
                    })
                },imgOptions);
                images.forEach(image=>{
                    imgObserver.observe(image);
                });
            });