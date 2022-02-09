
// -*- coding = utf-8 -*-
// @Author: Li Ge
// @Time: 2022/1/25 

function search() {
    if (document.getElementById("search_input").value != ""){
        window.location.href="https://so.toutiao.com/search?keyword=" + document.getElementById("search_input").value + "&pd=information&source=search_subtab_switch&dvpf=pc&aid=4916&page_num=0";
        document.getElementById("search_input").value = "";
    }

    return false;
}