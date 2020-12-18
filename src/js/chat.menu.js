
$(function (){
    let listItems = $("#storageSettings .PermissionsTemplates .list .item span");
    for(let i = 0;i<listItems.length;i++){
        let input = `<input type="radio" name="selectPermissionsTemplates" value="${listItems[i].innerText}" style="display: none;">`;
        $("#storageSettings .PermissionsTemplates .list .item")[i].innerHTML += input;
    }
});

$(function (){
    $("#storageSettings .Modal_main_conten_box > .content > .menuTemplate > .JoinLincks > .list > .item > .link").bind("click", function (){
        let copyText = this.innerText;

        var textArea = document.createElement("textarea");
        textArea.value = copyText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
    });
});

$("#storageSettings .PermissionsTemplates .list .item").bind("click", function (e){
    $(this.lastElementChild).prop("checked", true);
    let obj =  $(this.lastElementChild).val();

    $("#storageSettings .PermissionsTemplates .item").css("background-color", "");
    $(this).css("background-color", "rgba(114, 171, 255, 0.5)");
    $("#viewSetPermissionsTemplatesName").val($(this.lastElementChild).val());
});
