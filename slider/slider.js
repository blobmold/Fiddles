class SliderNew {
    constructor(imageElement, nextBtnID, prevBtnID) {
        this.imgNodeList = document.querySelectorAll(imageElement);
        this.imgContainer = document.querySelectorAll('.slider-img-container li');
        this.nextBtn = document.getElementById(nextBtnID);
        this.prevBtn = document.getElementById(prevBtnID);
        this.imgArr = Array.from(this.imgNodeList);
    }

    launchSlider() {
        this.nextSlide();
        this.prevSlide();
    }

    currentSlideIndex() {
        for(let el of this.imgArr) {
            if(el.className === "activeSlide") {
                return this.imgArr.indexOf(el);
            }
        }
    }

    nextSlide() {
        this.nextBtn.addEventListener('click', () => {
            let current = this.currentSlideIndex();
            this.imgArr[current].classList.remove('activeSlide');
            let next = current + 1;
            if(next >= this.imgArr.length) {
                next = 0;
            }
            this.imgArr[next].classList.add('activeSlide');
            for(let img of this.imgContainer) {
                img.style.transform = `translate(-${next}00%)`;
            }
        })
    }

    prevSlide() {
        this.prevBtn.addEventListener('click', () => {
            let current = this.currentSlideIndex();
            this.imgArr[current].classList.remove('activeSlide');
            let prev = current - 1;
            if(prev === -1) {
                prev = this.imgArr.length - 1;
            }
            this.imgArr[prev].classList.add('activeSlide');
            
            for(let img of this.imgContainer) {
                img.style.transform = `translate(${prev}00%)`;
            }
        })
    }
}

let sliderNew = new SliderNew('.slider-img-container img', 'nextarrow', 'prevarrow');
sliderNew.launchSlider();
