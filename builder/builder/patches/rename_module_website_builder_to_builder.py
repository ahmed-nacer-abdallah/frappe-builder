def execute():
	print('Renaming Website Builder to Builder')
	if frappe.db.exists('Module Def', 'Website Builder'):
		frappe.rename_doc('Module Def', 'Website Builder', 'Builder', force=True)
