(function ()
{
    var panels =
    {
        "1": { hash: "",        title: "Home"            },
        "2": { hash: "contact", title: "Contact"         },
        "3": { hash: "gallery", title: "Picture Gallery" }
    };

    $(document).ready(
        function ()
        {
            if (location.hash
             && typeof history !== "undefined")
            {
                var hash = location.hash.replace(/^#/, "").toLowerCase();
                switch (hash)
                {
                    case "contact":
                    
                        selectPanel("2", /* isInitial: */ true);
                        break;
                    
                    case "gallery":
                    
                        selectPanel("3", /* isInitial: */ true);
                        break;

                    default:
                    
                        break;
                }
            }
            
            $(".tabs").on(
                "click",
                "li",
                function (ev)
                {
                    var n = ev.currentTarget.getAttribute("data-tab");

                    if (n)
                    {
                        n = n.replace(/\\"/, "\\$1");
                        selectPanel(n);
                    }
                }
            );
        }
    );
    
    function selectPanel(n, isInitial)
    {
        if (!panels.hasOwnProperty(n))
        {
            return;
        }
        
        // Default value for {isInitial} is false
        isInitial = isInitial === true;
        
        $(".body *[data-panel=\"" + n + "\"]")
            .show()
            .siblings()
            .hide()
        ;

        $(".header *[data-tab=\"" + n + "\"]")
            .addClass("selected")
            .siblings()
            .removeClass("selected")
        ;
        
        if (!isInitial
         && typeof history !== "undefined"
         && typeof history.replaceState === "function")
        {
            var panelobj = panels[n];
            var title = panelobj.title;
            var hash = panelobj.hash;

            var newLocation = location.origin
                            + location.pathname
                            + (hash ? "#" + hash : "");

            history.replaceState({}, title, newLocation);
        }
    }

})();
