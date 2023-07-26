function get_calc(btn){

    console.log("display  = " + document.dentaku.display.value);
    console.log("BtnValue = " + btn.value);

    if(btn.value == "="){
        // 計算してdisplay.valueに設定
        document.dentaku.display.value=eval(document.dentaku.display.value);
    }else if(btn.value == "AC"){
        // displayの表示を"0"にする。
        document.dentaku.display.value="0";
    }else{
        // displayの最後の文字が+,-,*./ のいずれかかチェック
        console.log("display2  = " + document.dentaku.display.value.slice(-1));
        if ("+-*/.".includes(document.dentaku.display.value.slice(-1))) {
            // btn.valueが+,-,*./ のいずれかかチェック
            if ("+-*/.".includes(btn.value)) {
                // displayの最後の文字をbtn.valueの値で書換える
                document.dentaku.display.value.replace(/.$/,btn.value);
            // 上記以外(整数か".")
            } else {
                document.dentaku.display.value += btn.value;
            }
        // 上記以外
        } else {
            // dispay.valueが"0"の場合
            if(document.dentaku.display.value == "0"){
                //btn.valueが"."の場合
                if(btn.value == "."){
                    document.dentaku.display.value += btn.value;
                // 上記外で整数の場合
                } else {
                    document.dentaku.display.value = btn.value;
                }
            // 上記以外
            } else {
                // 文字列を連結
                document.dentaku.display.value += btn.value;
            }
        }
        
//        if(btn.value == "*"){
//            btn.value="*";
//        }else if (btn.value == "/"){
//            btn.value="/";
//        }
        
//        console.log("BtnValue=" + btn.value);
//        document.dentaku.display.value += btn.value;
//        document.dentaku.display.value="*";
//        document.dentaku.display.value="/";
    }
}
