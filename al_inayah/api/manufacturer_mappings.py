import frappe

@frappe.whitelist(allow_guest=True)
def search():
    item = frappe.form_dict.get("item")

    if not item:
        return []

    data = frappe.db.get_list(
        "Manufacturer Item",
        filters={
            "item_code": ["like", f"%{item}%"]
        },
        fields=["*"]
    )

    return data
