//画像と動画の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [//PC用の動画と画像
        { src: "{% static 'images/Django_agile.png' %}",//動画が再生されなかった場合の代替画像
         video:{
           src: [//mp4で動画が再生されない時のことを考えて複数の形式の動画を設定
            "{% static 'movie/mov_hts-samp001.mp4' %}",
            "{% static 'movie/mov_hts-samp003.mp4' %}",
            "{% static 'movie/mov_hts-samp004.mp4' %}",
           ],
           loop: false,//動画を繰り返さない
           mute: true,//動画の音を鳴らさない
         }
        },
        {src: "{% static 'images/Django_agile.png' %}"},
        {src: "{% static 'images/Django_agile.png' %}"}
      ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: "{% static 'images/Django_agile.png' %}" },
        { src: "{% static 'images/Django_agile.png' %}" },
        { src: "{% static 'images/Django_agile.png' %}" }
      ];
}

//Vegas全体の設定
$('#slider').vegas({
    overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
    transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 5000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像と動画の設定を読む
  });



Resources