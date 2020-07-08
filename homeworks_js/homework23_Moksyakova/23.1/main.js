$(function () {
    let doneCheck = 0;
    let curZindex = 0;
    $(".pic")
      .draggable({
        containment: "body",
        scroll: false
      })
      .on("mousedown", function () {
        $(this)
          .css("z-index", curZindex + 1)
          .children()
          .addClass("grabbed")
          .mouseup(function () {
            $(this).removeClass("grabbed");
          });
        curZindex++;
      });
  
    shuffle();
    dropSet();
  
    $(".puzzlify").on("click", function () {
      if ($("input").val() != "") puzzlify();
    });
  
    function shuffle() {
      for (let k = 1; k <= 5; k++)
        for (let i = 1; i <= 5; i++) {
            let posHolderLeft;
            let posHolderTop;
            let randIndex = Math.floor(Math.random() * 5) + 1;
            let randIndex2 = Math.floor(Math.random() * 5) + 1;
          posHolderTop = $(".pic-" + i + "-" + k).css("top");
          posHolderLeft = $(".pic-" + i + "-" + k).css("left");
          $(".pic-" + i + "-" + k).css(
            "top",
            $(".pic-" + randIndex + "-" + randIndex2).css("top")
          );
          $(".pic-" + randIndex + "-" + randIndex2).css("top", posHolderTop);
          $(".pic-" + i + "-" + k).css(
            "left",
            $(".pic-" + randIndex + "-" + randIndex2).css("left")
          );
          $(".pic-" + randIndex + "-" + randIndex2).css("left", posHolderLeft);
        }
    }
  
    function dropSet() {
      for (let i = 1; i <= 5; i++)
        for (let k = 1; k <= 5; k++) {
          $(".dz-" + i + "-" + k).droppable({
            accept: ".pic-" + i + "-" + k,
            drop: function (event, ui) {
              doneCheck++;
              $(ui.helper[0]).css("top", $(this).position().top);
              $(ui.helper[0]).css("left", $(this).position().left);
              $(ui.helper[0]).draggable("disable").css("z-index", "1");
              if (doneCheck == 25) {
                $(".pic").css("border", "none");
                alert("Good job!");
              }
            }
          });
        }
    }
  
    function puzzlify() {
        let picAddr = 'url("' + $("input").val() + '")';
      $("input").val("");
      $(".inner-pic").css("background-image", picAddr);
      $(".indz").css("background-image", picAddr);
    }
  });
  