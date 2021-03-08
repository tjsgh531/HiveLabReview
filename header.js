export class Header{
    constructor(){
        this.menuBar();
    }
    menuBar(){
        $('#menuMouse').on('mouseenter',()=>{
            setTimeout(()=>{
                $('#cursorBar').css('transition','left 0.3s ease-in-out , width 0.3s ease-in-out;');
            },100);
        }).on('mouseleave',()=>{
            $('#cursorBar').css('transition','left 0s ease-in-out , width 0s ease-in-out;').width(0);
        });

        $('.menuBtn').on('mouseover',(e)=>{
            let barWidth;
            let target = e.target.getAttribute('id');
            switch(target){
                case 'About':
                    barWidth = '58px';
                    break;
                case 'Service':
                    barWidth = '64px';
                    break;
                case 'Work':
                    barWidth = '50px';
                    break;
                case 'People':
                    barWidth = '64px';
                    break;
                case 'Contact':
                    barWidth = '68px';
                    break; 
            }
            $('#cursorBar').width(barWidth);
        });


        
    }
}