define("plugins/c9.ide.softcover.snippets/__installed__", [],[
    {
        "packagePath": "plugins/c9.ide.softcover.snippets/__static__"
    }
]);

define("plugins/c9.ide.softcover.snippets/__static__",[], function(require, exports, module) {
    main.consumes = [
        "Plugin", "plugin.debug"
    ];
    main.provides = [];
    return main;
    function main(options, imports, register) {
        var debug = imports["plugin.debug"];
        var Plugin = imports.Plugin;
        var plugin = new Plugin();
        plugin.version = "1.0.0";
        plugin.on("load", function load() {
            [
                {
                    "type": "snippets",
                    "filename": "polytexnic.snippets",
                    "data": "scope: _\nsnippet \\(\n\t\\( ${0} \\)\n\nsnippet \\[\n\t\\[ ${0} \\]\n\nsnippet ptn\n\t\\( ${0} \\)\n\nsnippet ptnc\n\t\\[ ${0} \\]\n\nsnippet frac\n\t\\frac{${1}}{${2}}\n\nsnippet dfrac\n\t\\dfrac{${1}}{${2}}\n\nsnippet item\n\t\\begin{itemize}\n\t\t\\item ${1}\n\t\t\\item ${0}\n\t\\end{itemize}\n\nsnippet enum\n\t\\begin{enumerate}\n\t\t\\item ${1}\n\t\t\\item ${0}\n\t\\end{enumerate}\n\nsnippet dot\n\t\\dot{${1}}\n\nsnippet ol\n\t\\overline{${1}}\n\nsnippet times\n\t\\times\n\nsnippet label\n\t\\label{${0:label_identifier}}\n\nsnippet ref\n\t~\\ref{${0:label_identifier_to_reference}}\n\nsnippet eqref\n\t~\\eqref{${0:equation_label_identifier_to_reference}}\n\nsnippet tilde\n\t\\textasciitilde\n\nsnippet text\n\t\\text{${0}}\n\nsnippet bold\n\t\\textbf{${0}}\n\nsnippet b\n\t\\textbf{${0}}\n\nsnippet textbf\n\t\\textbf{${0}}\n\nsnippet italic\n\t\\textit{${0}}\n\nsnippet i\n\t\\textit{${0}}\n\nsnippet textit\n\t\\textit{${0}}\n\nsnippet texttt\n\t\\texttt{${0}}\n\nsnippet ttt\n\t\\texttt{${0}}\n\nsnippet smallcaps\n\t\\textsc{${0}}\n\nsnippet textsc\n\t\\textsc{${0}}\n\nsnippet _\n\t\\underline{${0}}\n\nsnippet therefore\n\t\\therefore\n\nsnippet since\n\t\\because\n\nsnippet because\n\t\\because\n\nsnippet begend\n\t\\begin{${1}}\n\t\t${0}\n\t\\end{$1}\n\nsnippet pbox\n\t\\pbox{${1:9cm}}{${0:your_paragraph}}\n\nsnippet fig\n\t\\begin{figure}[${1:placement_specifier - h, h!, H, t, b, p}]\n\t\t\\image{${2:images/figures/image.png}}\n\t\t\\caption{${3:image_caption_here.}\\label{fig:${0:figure_label_here}}}\n\t\\end{figure}\n\nsnippet aside\n\t\\begin{aside}\n\t\t\\label{aside:${1:label_for_this_aside}}\n\t\t\\heading{${2:heading_for_this_aside}}\n\t\t${0:aside_content_goes_here}\n\t\\end{aside}\n\nsnippet phi\n\t\\phi\n\nsnippet sqrt\n\t\\sqrt{${0}}\n\nsnippet approx\n\t\\approx\n\nsnippet txt\n\t\\text{${0}}\n\nsnippet qquad\n\t\\qquad{${0}}\n\nsnippet coloredtext\n\t\\coloredtext{${1:color_in_words}}{${0:your_text}}\n\nsnippet coloredtexthtml\n\t\\coloredtexthtml{${1:HEX_COLOR_CODE}}{${0:your_text}}\n\nsnippet footnote\n\t[^${1:footnote_label}]: ${0:your_footnote}\n\n\nsnippet reffootnote\n\t[^${0:footnote_label}]\n\nsnippet latex\n\t\\LaTeX\n\nsnippet polytex\n\t\\PolyTeX\n\nsnippet eq\n\t\\begin{equation}\n\t\t${0}\n\t\\end{equation}\n\nsnippet equation\n\t\\begin{equation}\n\t\t${0}\n\t\\end{equation}\n\nsnippet quote\n\t\\begin{quote}\n\t\t${0}\n\t\\end{quote}\n\nsnippet q\n\t\\begin{quote}\n\t\t${0}\n\t\\end{quote}\n\nsnippet table\n\t\\begin{table}\n\t\t\\caption{${1:your_table_caption_here}\\label{table:${2:your_table_label_here}}}\n\t\t\\begin{tabular}{|r|lc|}\n\t\t  \\hline\n\t\t  ${3:r1c1_content} & ${4:r1c2_content} & ${5:r1c3_content} \\\\\n\t\t  \\hline\n\t\t  ${0} \\\\\n\t\t  \\hline\n\t\t\\end{tabular}\n\t\\end{table}"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "c9.ide.softcover.snippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("c9.ide.softcover.snippets.bundle");
        
        register(null, {});
    }
});
