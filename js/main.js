$(function(){
    /* about - 탭 메뉴 */
    $('.ques').on('click', function(e){
        e.preventDefault();

        let i = $(this).index()

        $('.ques').removeClass('on');
        $(this).addClass('on');

        $('.ans').removeClass('on');
        $('.ans').eq(i).addClass('on');


    })

    /* 스킬들 아이콘 넣기 */
    $('.skills .skill figure').each(function(i){
        const imgNum = (i + 1).toString().padStart(2, '0');
        const img = $(this).find('img');

        img.attr('src' , `img/ico/ico_skill_${imgNum}.png`);
    })

    //프로젝트 섬네일 넣기
    $('.sec_03 .content .project_sum').each(function(i){
        const imgNum = (i + 1).toString().padStart(2, '0');
        $(this).css('background', `url(../img/img_project${imgNum}.png) no-repeat center/cover`)
    })

    //프로젝트 비디오 재생하기
    $('.sec_03 .content .project_sum').on('mouseenter' , function(){
        const $vid = $(this).find('video');

        $vid.css('opacity' , '1');
        
       const el = $vid.get(0);
       if (el) {
        try{
            el.currentTime = 0;
            el.play();
        } catch (e){}
       }
        
    })
    $('.sec_03 .content .project_sum').on('mouseleave' , function(){
        const $vid = $(this).find('video');

        $vid.css('opacity' , '0')
    })
})
