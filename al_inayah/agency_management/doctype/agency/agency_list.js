frappe.listview_settings['Agency'] = {
    hide_name_column: true, 
    get_indicator: function (doc) {
        // customize indicator color
        if (doc.is_active) {
            // console.log(doc,'DOC')
            return [__("Active"), "green", "is_active,=,1"];
        } else {
            return [__("Inactive"), "red", "is_active,=,0"];
        }
    },
    formatters: {
        is_active(val) {
            return val ? 'Active' : 'Inactive';
        }
    }
}