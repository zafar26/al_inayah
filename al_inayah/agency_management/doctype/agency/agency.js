// Copyright (c) 2026, Zafar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Agency', {
	before_save(frm) {
		if(frm.doc.items.length != 0 && !frm.doc.is_active){
		    frappe.throw("Please Remove Items Linked to this Agency")
		}
	},
	refresh(frm){
	    frm.add_custom_button('Create Supplier', () => {
            frappe.set_route('supplier', "new");
        })
	}
})