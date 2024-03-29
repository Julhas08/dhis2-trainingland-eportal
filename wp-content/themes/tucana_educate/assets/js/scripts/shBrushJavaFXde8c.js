SyntaxHighlighter.brushes.JavaFX=function()
{var datatypes='Boolean Byte Character Double Duration '
+'Float Integer Long Number Short String Void';var keywords='abstract after and as assert at before bind bound break catch class '
+'continue def delete else exclusive extends false finally first for from '
+'function if import in indexof init insert instanceof into inverse last '
+'lazy mixin mod nativearray new not null on or override package postinit '
+'protected public public-init public-read replace return reverse sizeof '
+'step super then this throw true try tween typeof var where while with '
+'attribute let private readonly static trigger';this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:'comments'},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:'comments'},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},{regex:/(-?\.?)(\b(\d*\.?\d+|\d+\.?\d*)(e[+-]?\d+)?|0x[a-f\d]+)\b\.?/gi,css:'color2'},{regex:new RegExp(this.getKeywords(datatypes),'gm'),css:'variable'},{regex:new RegExp(this.getKeywords(keywords),'gm'),css:'keyword'}];this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);};SyntaxHighlighter.brushes.JavaFX.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.JavaFX.aliases=['jfx','javafx'];