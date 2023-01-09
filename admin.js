require.config({ paths: { vs: 'node_modules/monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], function () {
	php_script = monaco.editor.create(document.getElementById('php_script'), {
		value: "",
		language: 'php',
		lineNumbers: true,
		roundedSelection: false,
		scrollBeyondLastLine: false,
		readOnly: false,
		glyphMargin: false,
		vertical: 'auto',
		horizontal: 'auto',
		verticalScrollbarSize: 10,
		horizontalScrollbarSize: 10,
		theme: 'vs-dark',
		wordWrap: 'wordWrapColumn',
		minimap: { enabled: false },
		wordWrapColumn: 120,
		wordWrapMinified: true,
		wrappingIndent: "indent",
		automaticLayout: true,
		lineHeight: 12 * 1.45,
		fontSize: 15,
		"autoIndent": true,
		"formatOnPaste": true,
		"formatOnType": true,
		'bracketPairColorization.enabled': true,
		value: '<?php\n\t\n\n\n\?>',
	});
	jQuery( window ).resize(function() {
		php_script.layout({});
	});
});