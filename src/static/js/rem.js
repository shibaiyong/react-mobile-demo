(function (designWidth, maxWidth) {
    var doc = document,
        win = window;
    var docEl = doc.documentElement;
    var tid;
    var rootItem, rootStyle;
  
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (!maxWidth) {
            maxWidth = 540;
        }
        ;
        if (width > maxWidth) {
            width = maxWidth;
        }
        //与淘宝做法不同，直接采用简单的rem换算方法1rem=100px
        var rem = width * 100 / designWidth;
        //兼容UC开始
        rootStyle = "html{font-size:" + rem + 'px !important}';
        rootItem = document.getElementById('rootsize') || document.createElement("style");
        if (!document.getElementById('rootsize')) {
            document.getElementsByTagName("head")[0].appendChild(rootItem);
            rootItem.id = 'rootsize';
        }
        if (rootItem.styleSheet) {
            rootItem.styleSheet.disabled || (rootItem.styleSheet.cssText = rootStyle)
        } else {
            try {
                rootItem.innerHTML = rootStyle
            } catch (f) {
                rootItem.innerText = rootStyle
            }
        }
        //兼容UC结束
        docEl.style.fontSize = rem + "px";
    };
    refreshRem();
  
    win.addEventListener("resize", function () {
        clearTimeout(tid); //防止执行两次
        tid = setTimeout(refreshRem, 300);
    }, false);
  
    win.addEventListener("pageshow", function (e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
  
    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "16px";
    } else {
        doc.addEventListener("DOMContentLoaded", function (e) {
            doc.body.style.fontSize = "16px";
        }, false);
    }
  })(375, 750);
  
  
  //复制
  function copyText(text) {
      const textString = text.toString();
      let input = document.querySelector('#copy-input');
      if (!input) {
        input = document.createElement('input');
        input.id = "copy-input";
        input.readOnly = "readOnly";
        input.style.position = "absolute";
        input.style.left = "-1000px";
        input.style.zIndex = "-1000";
        document.body.appendChild(input)
      }
      input.value = textString;
      selectText(input, 0, textString.length);
      if (document.execCommand('copy')) {
        document.execCommand('copy');
      }
      input.blur();
      return {
        then:function(success){
          if(success){
            success()
          }
        }
      }
      function selectText(textbox, startIndex, stopIndex) {
        if (textbox.createTextRange) {
          const range = textbox.createTextRange();
          range.collapse(true);
          range.moveStart('character', startIndex);
          range.moveEnd('character', stopIndex - startIndex);
          range.select();
        } else {
          textbox.setSelectionRange(startIndex, stopIndex);
          textbox.focus();
        }
      }
    };
  
  
//   $(function(){
//       /*-------------------模拟复选框的功能逻辑-----------------------*/
      
//       $('.checkboxContainer').click(function(){
//           if(!$(this).hasClass('checkedBg')){
//               $(this).addClass('checkedBg').removeClass('uncheckedBg')
//               $(this).find('span').attr('chec',1)
//           }else{
//               $(this).removeClass('checkedBg').addClass('uncheckedBg')
//               $(this).find('span').attr('chec',0)
//           }
//       })
          
//   })
  