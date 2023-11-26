

export const appObserver = (el,className)=>{

    let elementObserver = new IntersectionObserver(toggleClass);

    elementObserver.observe(el);


    function toggleClass(entry){

        // console.log("ENTRY",entry[0]);
        if(entry[0].isIntersecting){
            entry[0].target.classList.add(className)
        }
        
    }
}


