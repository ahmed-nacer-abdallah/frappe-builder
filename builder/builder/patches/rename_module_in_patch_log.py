def execute():
	frappe.db.sql("""UPDATE `tabPatch Log` SET patch = REPLACE(patch, 'website_builder.website_builder', 'builder.builder') WHERE patch LIKE 'website_builder.website_builder%'""")
