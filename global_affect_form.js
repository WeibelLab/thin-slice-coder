function globalAffectForm() {
    return `
    <details>
        <summary>
            <h3>Global Affect Rating (click to show/hide form)</h3>
        </summary>
        <div>
            Assign ratings based on your overall affective impressions.<br><br>
            <table>
                <tr>
                    (Sect. 1) a "1" means <u>no</u> signs of the affect
                </tr>
                <tr>
                    <th>
                        (1=low/none, 6=high)
                    </th>
                    <th class="global-affect">
                        Provider
                    </th>
                    <th class="global-affect">
                        Patient
                    </th>
                    <th class="global-affect">
                        Patient Partner
                    </th>
                </tr>
                <tr>
                    <td class="global-affect">
                        Anger/Irritation
                    </td>
                    <td class="center">
                        <select id="provider-anger">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="patient-anger">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-anger">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Anxiety/Nervousness
                    </td>
                    <td class="center">
                        <select id="provider-anxiety">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="patient-anxiety">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-anxiety">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Depression/Sadness (Pt)
                    </td>
                    <td class="center">
                        ----
                    </td>
                    <td class="center">
                        <select id="patient-depression">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-depression">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Emotional Distress/Upset (Pt)
                    </td>
                    <td class="center">
                        ----
                    </td>
                    <td class="center">
                        <select id="patient-upset">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-upset">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
            </table><br>
            <table>
                <tr>
                    (Sect. 2) a "3" or "4" is "average" allowing higher/lower ratings:<br>
                    - "1" when the speaker seems notably non-assertive<br>
                    - "6" when the speaker seems especially dominant
                </tr>
                <tr>
                    <th>
                        (1=low/none, 6=high)
                    </th>
                    <th class="global-affect">
                        Provider
                    </th>
                    <th class="global-affect">
                        Patient
                    </th>
                    <th class="global-affect">
                        Patient Partner
                    </th>
                </tr>
                <tr>
                    <td class="global-affect">
                        Dominance/Assertiveness
                    </td>
                    <td class="center">
                        <select id="provider-dominance">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="patient-dominance">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-dominance">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Interest/Attentiveness
                    </td>
                    <td class="center">
                        <select id="provider-interest">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="patient-interest">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-interest">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Friendliness/Warmth
                    </td>
                    <td class="center">
                        <select id="provider-warmth">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="patient-warmth">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-warmth">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Responsiveness/Engagement
                    </td>
                    <td class="center">
                        <select id="provider-engage">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="patient-engage">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-engage">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Sympathetic/Empathetic
                    </td>
                    <td class="center">
                        <select id="provider-sympathy">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="patient-sympathy">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-sympathy">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Hurried/Rushed (Dr)
                    </td>
                    <td class="center">
                        <select id="provider-hurry">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        ----
                    </td>
                    <td class="center">
                        ----
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Respectfulness
                    </td>
                    <td class="center">
                        <select id="provider-respect">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="patient-respect">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-respect">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="global-affect">
                        Interactivity
                    </td>
                    <td class="center">
                        <select id="provider-interact">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="patient-interact">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                    <td class="center">
                        <select id="partner-interact">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>
            </table>
            <h3>Rater Notes</h3>
            What did you notice about rating this interaction?<br>
            How accurate do you think you were? Any other comments?
            <textarea id="rater_notes" rows="4"></textarea>
        </div>
    </details>
    `
}

const global_affect_form = globalAffectForm();
document.getElementById('global_affect_import').insertAdjacentHTML("afterbegin", global_affect_form);


function getGlobalAffectInput() {
    var global_affect_categories = ["anger", "anxiety", "depression", "upset",
    "dominance", "interest", "warmth", "engage", "sympathy", "hurry", "respect", "interact"]
    var global_affect_speakers = ["provider", "patient", "partner"]

    var globalAffectData = "";
    var category;
    var speaker;
    var lookup_id;
    var cat_idx
    var speak_idx

    for (cat_idx=0; cat_idx < global_affect_categories.length-1; cat_idx++) {
        for (speak_idx=0; speak_idx < global_affect_speakers.length; speak_idx++) {
            category = global_affect_categories[cat_idx];
            speaker = global_affect_speakers[speak_idx];
            lookup_id = speaker+"-"+category;
            globalAffectData += lookup_id+",";
        }
    }
    category = global_affect_categories[cat_idx];
    for (speak_idx=0; speak_idx < global_affect_speakers.length-1; speak_idx++) {
        speaker = global_affect_speakers[speak_idx];
        lookup_id = speaker+"-"+category;
        globalAffectData += lookup_id+",";
    }
    speaker = global_affect_speakers[speak_idx];
    lookup_id = speaker+"-"+category;
    globalAffectData += lookup_id+"\n";

    var data;
    for (cat_idx=0; cat_idx < global_affect_categories.length-1; cat_idx++) {
        for (speak_idx=0; speak_idx < global_affect_speakers.length; speak_idx++) {
            category = global_affect_categories[cat_idx];
            speaker = global_affect_speakers[speak_idx];
            lookup_id = speaker+"-"+category;
            try {
                var el = document.getElementById(lookup_id);
                data = el.options[el.selectedIndex].text;
            }
            catch(err) {
                data = "-";
            }
            globalAffectData += data+",";
        }
    }
    category = global_affect_categories[cat_idx];
    for (speak_idx=0; speak_idx < global_affect_speakers.length-1; speak_idx++) {
        speaker = global_affect_speakers[speak_idx];
        lookup_id = speaker+"-"+category;
        try {
            var el = document.getElementById(lookup_id);
            data = el.options[el.selectedIndex].text;
        }
        catch(err) {
            data = "-";
        }
        globalAffectData += data+",";
    }
    speaker = global_affect_speakers[speak_idx];
    lookup_id = speaker+"-"+category;
    try {
        var el = document.getElementById(lookup_id);
        data = el.options[el.selectedIndex].text;
    }
    catch(err) {
        data = "-";
    }
    globalAffectData += data+"\n";

    var notes_content = document.getElementById("rater_notes").value;
    notes_content = notes_content.replace(/(\r\n|\n|\r)/gm," ");
    globalAffectData += "Rater Notes:,"+notes_content+"\n\n";

    return globalAffectData

}