var main = {

    init : function(){

        var _this = this;

        $('#btn-save').on('click', function(){
            _this.save();
        });

    },

    save : function(){

        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/playGroundForm',
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function(){
            alert('글이 등록되었습니다.');
            window.location.href = '/board/playGround';
        }).fail(function (error){
            alert(JSON.Stringify(error));
        });
    }

};

main.init();