
let DEBUG_MODE = true;
$(function(){
    $("textarea").bind('keypress', function (e) {
        if((e.originalEvent.code == "Enter" && e.originalEvent.shiftKey) || (this.scrollHeight > this.clientHeight)){
            if($(this).attr('rows') == 4)
                return;
            SetSizeSendBox(this, 23);
            $(this).attr('rows', Number($(this).attr('rows')) + 1);
        }
    });

    let lastPosCursotInLine = 1;
    $("textarea").bind("keydown", function(e){
        if(e.originalEvent.code == "Backspace"){
            let pos = this.value.substr(0, this.selectionStart).split("\n").length + 1;

            if(pos < lastPosCursotInLine && pos <= 4 && $(this).attr('rows') > 1){
                SetSizeSendBox(this, -23);
                $(this).attr('rows', Number($(this).attr('rows')) - 1);
            }
            lastPosCursotInLine = pos;
        }
    });

    function ArrStringToNumArr(arr){
        arr = String(arr.replaceAll(/[a-z]+/gi, "")).split(" ");
        let resArr = [];
        for(let i = 0;i<arr.length;i++){
            resArr.push(Number(arr[i]));
        }
        return resArr;
    }

    function SetSizeSendBox(obj, addSize){
        let oldH = String($(obj).css("height")).replace("px","");
        oldH = Number(oldH) + addSize;
        oldH = oldH+"px";
        $(obj).css("height", oldH);
        let arr = ArrStringToNumArr($("#mainBox").css("grid-template-rows"));
        let resStr = arr[0] + "px ";
        resStr += Number(arr[1] - addSize) + "px ";
        resStr += Number(arr[2] + addSize) + "px";
        $("#mainBox").css("grid-template-rows", resStr);
    }
});

$(function(){

    $(".messageItem").bind("contextmenu", function(e){
        $("#message_Custom_context_menu").css("left", e.originalEvent.clientX);
        $("#message_Custom_context_menu").css("top", e.originalEvent.clientY);
        $("#message_Custom_context_menu").show();
        return false;
    });

    $("#MessagesBox").bind("contextmenu", function(){
        $(".Custom_context_menu").hide();
        return false;
    });

    $("#contentBox").bind("click", function(e){
        $(".Custom_context_menu").hide();
    });
    $("#contentBox").bind("contextmenu", function(e){
        $(".Custom_context_menu").hide();
        return false;
    });

    $("#TitleInfoBox").bind("click", function(e){
        $("#detailedInfoAboutStorage").show();
    });

    $("#buttonOpen_stSettings").bind("click", function(e){
        $("#storageSettings").show();
    });

    $(".Modal_close").bind("click", function(e){
        $($("."+this.classList[1])[0]).hide();
    });

    $("#Modal_swich_userList").bind("click", function (e) {
        $("#Modal_swich_setting").css("border-bottom", "none");
        $("#Modal_swich_userList").css("border-bottom", "2px solid rgb(76, 93, 110)");
        $("#ListUsers_inStorage").show();
        $("#SettingPanel").hide();
    });
    $("#Modal_swich_setting").bind("click", function (e) {
        $("#Modal_swich_userList").css("border-bottom", "none");
        $("#Modal_swich_setting").css("border-bottom", "2px solid rgb(76, 93, 110)");
        $("#ListUsers_inStorage").hide();
        $("#SettingPanel").css("display", "grid");
    });
});

function addUserToList(User){
    let obj =
        `<div class="ItemUserFromViewList" id="user_${User.Id}">
            <div class="avatar">
                <img src="./source/imgs/default-user-avatar-96.png">
            </div>
            <div class="info">
                <div class="name">
                    <span>${User.UserName}</span>
                </div>
                <div class="status">
                    <span>status</span>
                </div>
            </div>
            <div class="permission">
                <span>PermissionsTemplates.Name</span>
            </div>
        </div>`;
    $(obj).appendTo("#ListUsers_inStorage");
}

function addJoinLink(User, URLObj){
    let obj =   `<div class="item" id="JoinLink_${URLObj.Id}">
                    <div class="user">
                        <div class="avatar">
                            <img src="source/imgs/default-user-avatar-96.png">
                        </div>
                        <div class="name">
                            <span><a href="#">${User.UserName}</a></span>
                        </div>
                    </div>
                    <div class="link">
                        <span>${URLObj.URL}</span>
                    </div>
                    <div class="time">
                        <span>${URLObj.CreateDate}</span>
                    </div>
                    <div class="settings">
                        <button title="Delete">Delete</button>
                    </div>
                </div>`;
    $(obj).appendTo("#storageSettings .Modal_main_conten_box > .content > .menuTemplate > .JoinLincks > .list");
}

function addBanUserInList(BanUser){
    let obj =   `<div class="item" id="$Ban_{BanUser.Id}">
                    <div class="user">
                        <div class="avatar">
                            <img src="source/imgs/default-user-avatar-96.png">
                        </div>
                        <div class="name">
                            <span><a href="#">${BanUser.User.UserName}</a></span>
                        </div>
                    </div>
                    <div class="reason">
                        <span>${BanUser.Description}</span>
                    </div>
                    <div class="time">
                        <div class="start">
                            <span>${BanUser.StartBan}</span>
                        </div>
                        <div class="end">
                            <span>${BanUser.EndBan}</span>
                        </div>
                        <div class="duration">
                            <span>${BanUser.Duration}</span>
                        </div>
                    </div>
                    <div class="settings">
                        <button>Unban</button>
                    </div>
                </div>`;
    $(obj).appendTo("#storageSettings .Modal_main_conten_box > .content > .menuTemplate > .Bans > .list")
}

function addLog(log){
    let obj =   `<div class="item" id="Log_${log.Id}">
                    <div class="date">
                        <span>${log.CreateDate}</span>
                    </div>
                    <div class="user">
                        <div class="avatar">
                            <img src="source/imgs/default-user-avatar-96.png">
                        </div>
                        <div class="name">
                            <span><a href="#">${log.User.UserName}</a></span>
                        </div>
                    </div>
                    <div class="ection">
                        <span>${log.Content}</span>
                    </div>
                </div>`;
    $(obj).appendTo("#storageSettings .Modal_main_conten_box > .content > .menuTemplate > .Log > .list");
}
