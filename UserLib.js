$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<div class="row">\
    <div class="col-lg-6 col-md-6 col-sm-12">\
        <h1>Neues Projekt</h1>\
        <p class="lead">Hier erkläre ich wie man ein neues Projekt macht</p>\
    </div>\
    <div class="col-lg-5 col-lg-offset-1 col-md-6 col-sm-12">\
        <br>\
        <img class="img-responsive" src="https://cdn.discordapp.com/attachments/641042906832044039/841066650198474802/Capturar.PNG">\
        <img src="http://pinegrow.com/placeholders/img15.jpg">\
    </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});