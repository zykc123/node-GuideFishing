/**
 * Created by yangw on 2016/11/4.
 * 企业招聘相关介绍页面
 */

/* 初始化 */
$(function () {

    // 公司名称动画
    $('.company').fadeIn();
    // 获取详细信息
    RecruitCompanyAction.getDetail();
});

/* 页面全局存储变量 */
var RecruitCompanyAction = {};

/* 获取招聘信息 */
RecruitCompanyAction.getDetail = function () {

    var company = $('.company').text().trim();
    var url = '/recruitment/company';

    // 请求服务器
    $.post(url, { company: company }, function (JSONdata) {
            // 更新页面
            RecruitCompanyAction.updatePage(JSONdata);
        }, "JSON");
};

/* 更新页面 */
RecruitCompanyAction.updatePage = function (JSONdata) {

    var JSONobject = JSON.parse(JSONdata);
    // 招聘信息
    var companyInfo = JSONobject.company;
    // 公司介绍
    var introduction = companyInfo.introduction;
    // 公司位置
    var position = companyInfo.position;
    // 公司图片
    var imgArray = companyInfo.imageUrls;
    // 公司介绍视频
    var videoArray = companyInfo.videoUrls;
    /*// 所有招聘职位
    var recruitments = recruitment.recruitments;*/

    // 更新介绍
    $('.introduction-main').text(introduction);
    // 更新位置
    var $mapMarker = $('<span class="glyphicon glyphicon-map-marker">');
    $mapMarker.text(position);
    $('.introduction-position').append($mapMarker);
    // 更新图片
    for(var index1 in imgArray){
        var $imgDiv = $('<img class="environment-image">');
        $imgDiv.prop('src', imgArray[index1].image);
        // 添加图片到页面
        $('.introduction-environment').append($imgDiv);
    }
    // 更新视频
    for(var index2 in videoArray){
        console.log(videoArray[index2]);
        var $video = $('<video class="video">');
        $video.prop({
            'src': videoArray[index2].video,
            'controls': 'controls'
        });
        // 添加视频
        $('.introduction-video').append($video);
    }


};


























