tasksController = function () {
    let taskPage;
    let initialised = false;
    let tasks = 0;
    return {
        init: function (page) {
            if (!initialised) {
                taskPage = page;
                $(taskPage)
                    .find('[required="required"]')
                    .prev('label')
                    .append('<span>*</span>')
                    .children('span')
                    .addClass('required');
                $(taskPage)
                    .find('tbody tr:even')
                    .addClass('even');
                $(taskPage)
                    .find('#btnAddTask')
                    .click(function (evt) {
                        evt.preventDefault();
                        $(taskPage).find('#taskCreation').removeClass('not');
                    });
                $(taskPage).find('tbody tr').click(function (evt) {
                    $(evt.target)
                        .closest('td')
                        .siblings()
                        .andSelf()
                        .toggleClass('rowHighlight');
                });
                $(taskPage).find('#tblTasks tbody').on('click','.deleteRow', function (evt) {
                    evt.preventDefault();
                    $(evt.target).parents('tr').remove();
                    tasks--;
                    $('#tasks').text(tasks);
                });
                $(taskPage).find('#saveTask').click(function (evt) {
                    evt.preventDefault();
                    if ($(taskPage).find('form').valid()) {
                        var task = $('form').toObject();
                        $('#taskRow').tmpl(task ).appendTo($(taskPage).find( '#tblTasks tbody'));
                        tasks++;
                        $('#tasks').text(tasks);
                    }
                });

                $(taskPage).find('#print').click(function (evt) {
                    evt.preventDefault();
                    var obj = $(taskPage).find('form').toObject();
                    console.log(JSON.stringify(obj));
                });

                $(taskPage).find('#load').click(function (evt) {
                    evt.preventDefault();
                    var obj = {
                        task: "new task",
                        requiredBy: "2022-07-31",
                        category: "Work"
                    };
                    $(taskPage).find('form').fromObject(obj);
                });

                $(taskPage).find('#clearTask').click(function (evt) {
                    evt.preventDefault();

                    $(taskPage).find('tbody').empty();
                    tasks=0;
                    $('#tasks').text(tasks);
                });

                $('#btnAddTask').click(function(evt) {
                    evt.preventDefault();
                    $('#taskCreation').removeClass('not');
                });

                initialised = true;
            }
        }
    }
}();

(function($) {
    $.fn.extend({
        toObject: function() {
            let result = {}
            this.serializeArray().map(x => {
                result[x.name] = x.value
            })
            return result;
        },
        fromObject: function(obj) {
            this.find(':input').toArray().map(x => $(x)).forEach(x => {
                let name = x.attr('name');
                if (obj[name]) {
                    x.val(obj[name]);
                } else {
                    x.val('');
                }
            });
        }
    });
})(jQuery);
