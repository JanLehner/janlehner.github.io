const main = document.querySelector('main');
const styleDiv = document.getElementById('stylesheetContainer');

export function portfoliosHtmlLoad(){
    styleDiv.innerHTML = `<link rel="stylesheet" href="./Stylesheets/portfolios.css">`;
    main.innerHTML = `<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=3d7ebe867089535aca6f" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Public Cloud für Anwendungen nutzen</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Dieses Portfolio bezieht sich auf die Leistungsbeurteilung des Moduls 210, bei der man mithilfe von AWS
                und GitLab eine Architektur erstellen muss, welche eine Beispiel-Containeranwendung hostet und die
                Möglichkeit bietet, diese automatisch über eine Pipeline zu aktualisieren.

                Als Umgebung für das Projekt verwendeten wir das Learner Lab von Amazon Web Services sowie GitLab.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=996dd575b7b447fb52b2" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Verschlüsselungsmethoden</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Das Ziel dieses Portfolioeintrags ist es zu zeigen, wie man mithilfe von OpenStego & OpenSSL eine Datei
                verschlüsseln, verstecken und anschliessend unbemerkt verschicken kann.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=a033260748d2694c0bee" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">NoSQL</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Dieses Portfolio dient als Dokumentation für die Leistungsbeurteilung des Moduls 165. Die erhaltene
                Aufgabe war wie folgt: Denken Sie sich einen Anwendungsfall aus, an dem man verschiedene Kompetenzen in
                Bezug zu NoSQL-Datenbanken nachweisen kann.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=21e3e4f7a9649b25398d" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Rentabilität von Mining mit dem eigenen Computer</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Im Modul 187 haben wir uns mit dem eigenen System befasst. Eines der Themen, die wir dabei behandelt
                haben, ist der Stromverbrauch des eigenen Systems. Das Ziel dieses Portfolios ist es zu wissen, wie man
                den ungefähren Stromverbrauch seines Gerätes ausrechnen kann, was die Kosten davon sind und ob Mining mit
                dem eigenen System lohnt.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=d2a99534b90843698be5" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Transaktionen in SQL</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Das Ziel dieses Portfolios ist es, zu erklären, was Transaktionen sind und wie man mit ihnen die
                Konsistenz von Datenbanken im SQL Server Management Studio absichern kann.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=06d3241b81d393edd423" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Cloud Lösung konzipieren und realisieren</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Dieses Portfolio bezieht sich auf die Leistungsbeurteilung des Moduls 346, bei der man ein kleines
                Cloud-Projekt planen und umsetzen muss. Als Aufgabenstellung erhielten wir den Auftrag, für die fiktive
                Firma „MeeNerd“ das Content-Management-System Drupal in einer Cloud zu realisieren. Als Umgebung
                verwendeten wir dabei das AWS Academy Learner Lab.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=edd275acfe7866113e65" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">SQL Server Management Studio</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Das Ziel dieses Portfolios ist es, zu zeigen, wie man im SQL Server Management Studio eine Tabelle
                mittels SQL-Skript und mittels CSV-Datei befüllen kann.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=6a3f0bb47ef22436ee0e" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Random Fakten Webseite</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Die Random Fact Webseite, ist eine einfache, aber dennoch lustige Webseite, bei der man sich entweder
                auf Deutsch oder Englisch unnütze Fakten mit einem dazu passenden GIF ausgeben kann.
                In diesem Portfolio wird die Realisierung der Seite beschrieben.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=41b0d46cfb68c072eb94" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Umrechnungswebseite</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Beim Number converter handelt es sich um eine Webseite, welche die Möglichkeit bietet, Ganzzahlen
                zwischen dem Dezimal-, Binär- und Hexadezimalsystem hin und her zu konvertieren.
                In diesem Portfolio wird die Realisierung der Seite beschrieben.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=42d81adab9da5dc63b68" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Timefinder</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Zeitfinder ist eine Webseite, welche ich erstellt habe, bei der man eine Ortschaft eingeben kann und
                über eine API die aktuelle Zeit dieser ausgegeben wird. Je nachdem, was für eine Uhrzeit zurückgegeben
                wird, verändert die Webseite passend das Hintergrundbild.
                In diesem Portfolio wird die Realisierung der Seite beschrieben.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=6d7d094554d22541849e" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Ausführen eines PowerShell Skripts</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Das Ziel dieses Portfolios ist es, zu wissen, was Execution Policies sind, wie man diese
                mittels PowerShell einstellt und wie man eine Verknüpfung so bearbeiten kann, dass diese per Doppelklick
                ein Skript ausführt.
            </p>
        </div>
    </div>
</a>
<a class="card" href="https://portfolio.bbbaden.ch/view/view.php?t=238eff7f73ad5651fd56" target="_blank">
    <div class="content">
        <div class="front-card-portfolio flexbox">
            <h3 class="agency title-card-portfolio">Daten analysieren und modellieren</h3>
        </div>
        <div class="back-card-portfolio flexbox">
            <p class="twCen description-card-portfolio">
                Das Ziel dieses Portfolios ist es anhand eines Beispiels zu wissen, wie man Daten charakterisiert,
                aufbereitet und mit Microsoft Excel darstellen kann.
            </p>
        </div>
    </div>
</a>`;
}