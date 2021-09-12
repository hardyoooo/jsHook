Java.perform(function () {
    var lawyee = Java.use("com.lawyee.wenshuapp.a.a");
    lawyee.a.overload('java.lang.String', 'java.lang.String').implementation = function (str1, str2) {
        console.log('param str1: ', str1);
        console.log('param str2: ', str2);
        var ret = this.a(str1, str2);
        console.log("ret: ", ret);
        return ret;
    };
    // var javaString = Java.use("java.lang.String")
    // var str1=javaString.$new('{"id":"20210402104159","command":"queryDoc","params":{"devid":"1933b12df8d54e8aa1bab29c7c01a20c","devtype":"1","ciphertext":"1010000 1110001 1101000 1010100 1101001 1110001 1100001 1110111 1100011 1000011 1101010 1010110 1101001 110001 1010010 1110000 1100011 1011000 1001000 1111010 1110101 1100110 110111 1110001 110010 110000 110010 110001 110000 110100 110000 110010 1110101 1001111 1111010 110100 1101100 1101110 1010100 1010101 1001111 1001010 1001111 1001000 1110100 101011 1000111 1010011 1101010 1101011 1111001 101011 1100010 1010001 111101 111101","pageSize":"20","sortFields":"s50:desc","pageNum":"1","queryCondition":[{"key":"s8","value":"02"}]}}')
    // var str2=javaString.$new('null')
    // console.log("test==>",str1,str2);
    // var res=lawyee.a(str1,str2);
    // console.log("res==>",res);
    // return res
    
});

// setTimeout(main, %);