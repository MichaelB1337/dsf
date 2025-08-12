# DSF Syntax Highlighting

**DSF Syntax Highlighting** adds rich syntax coloring and formatting awareness for `.dsf` files — a custom XML-like configuration format used in [your context / system name if relevant].  

This extension is designed to make DSF files easier to read, edit, and understand by highlighting key structures such as XML tags, DSF directives, attributes, and values.

---

## Features

- Full syntax highlighting for `.dsf` files
- XML tag support, including nested tags and attributes
- Highlighting for DSF directives like `:DPXXXX` commands
- Attribute/value coloring for DSF directives (similar to XML attributes)
- Special coloring for directive terminators (e.g. `:DPXXXX.` → `.` in its own style)
- Supports CDATA blocks and embedded XML inside `<textcontent>` elements
- File association: `.dsf` files are automatically recognized

---

## Requirements

No additional requirements — just install and start editing `.dsf` files.

---

## Extension Settings

This extension does not currently add custom settings.  
It simply registers a language grammar and file association for `.dsf` files.

---

## Known Issues

- Embedded XML inside `<textcontent>` tags is currently treated as plain text (by design).  
  We may add an option to highlight it in the future.

---

## Release Notes

### 0.0.1
- Initial release
- Syntax highlighting for `.dsf` files
- Directive and attribute coloring
- Auto file association for `.dsf`

---

## Feedback & Contributions

If you encounter issues or have ideas for improvement, please open an issue on the [GitHub repository](https://github.com/MichaelB1337/dsf).

---

**Enjoy editing DSF files with better clarity and less eye strain!**