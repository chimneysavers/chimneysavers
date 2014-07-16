(function ()
{
    $(document).ready(
        function ()
        {
            $(".tabs").on(
                "click",
                "li",
                function (ev)
                {
                    var n = ev.currentTarget.getAttribute("data-tab");

                    if (n)
                    {
                        n = n.replace(/\\"/, "\\$1");

                        $(".body *[data-panel=\"" + n + "\"]")
                            .show()
                            .siblings()
                            .hide()
                        ;
                        
                        $(ev.currentTarget)
                            .addClass("selected")
                            .siblings()
                            .removeClass("selected")
                        ;
                    }
                }
            );
        }
    );

})();
