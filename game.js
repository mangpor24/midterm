$(function () {
    var pre_names = ['อีเพิ้ง', 'กระเทยสาว', 'สงคราม', 'แม่มด', 'คุณหนู', 'นางฟ้า', 'มารร้าย', 'ขอทาน', 'คุณชาย', 'ยัยตัวร้าย'];
    var min_names = ['ขาย', 'มัดใจนาย', 'ปะทะ', 'บดขยี้', 'ปิ๊งรักนาย', 'ขยุ้มหัวใจนาย', 'สาป', 'ตบ', 'ร่าเริงกัับ', 'หลงสวาท'];
    var post_names = ['นายหมูตอน', 'หมอนวด', 'สัปเหร่อ', 'คุณครู', 'ตุ๊กแก', 'บัฟพาโร่', 'เอลี่ยน', 'ภารโรง', 'ขอทาน', 'ซาตาน'];
    $('#go').click(function () {
        /* fix result
        var day = $('#day').val();
        var month = $('#month').val();
        var year = $('#year').val();
        console.log(day + ',' + month + ',' + year);
        var result = pre_names[day - 1] + min_names[month - 1] + post_names[year - 1];
        $('#result').text(result); */

        
        var result2 = '\"' + pre_names[Math.floor(Math.random() * 10)] + '\t' +
            min_names[Math.floor(Math.random() * 10)] + '\t' +
            post_names[Math.floor(Math.random() * 10)] + '\"';
        $('#result').text(result2);
    });
});