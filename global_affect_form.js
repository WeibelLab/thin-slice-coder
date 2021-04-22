function globalAffectForm(slice_num, time_start, time_end) {
    return `
    <details>
        <summary>
            <b>Thin Slice ${slice_num} - ${time_start} to ${time_end}</b>
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
                        Primary Provider
                    </th>
                    <th class="global-affect">
                        Patient
                    </th>
                    <th class="global-affect">
                        Patient Partner
                    </th>
                    <th class="global-affect">
                        Secondary Provider
                    </th>
                    <th class="global-affect">
                        Other Staff
                    </th>
                </tr>
                <tr>
                    <td class="global-affect">
                        Anger/Irritation
                    </td>
                    <td class="center">
                        <select id="provider-anger-${slice_num}">
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
                        <select id="patient-anger-${slice_num}">
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
                        <select id="partner-anger-${slice_num}">
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
                        <select id="second-provider-anger-${slice_num}">
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
                        <select id="other-staff-anger-${slice_num}">
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
                        <select id="provider-anxiety-${slice_num}">
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
                        <select id="patient-anxiety-${slice_num}">
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
                        <select id="partner-anxiety-${slice_num}">
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
                        <select id="second-provider-anxiety-${slice_num}">
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
                        <select id="other-staff-anxiety-${slice_num}">
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
                        <select id="patient-depression-${slice_num}">
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
                        <select id="partner-depression-${slice_num}">
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
                        Emotional Distress/Upset (Pt)
                    </td>
                    <td class="center">
                        ----
                    </td>
                    <td class="center">
                        <select id="patient-upset-${slice_num}">
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
                        <select id="partner-upset-${slice_num}">
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
                        Primary Provider
                    </th>
                    <th class="global-affect">
                        Patient
                    </th>
                    <th class="global-affect">
                        Patient Partner
                    </th>
                    <th class="global-affect">
                        Secondary Provider
                    </th>
                    <th class="global-affect">
                        Other Staff
                    </th>
                </tr>
                <tr>
                    <td class="global-affect">
                        Dominance/Assertiveness
                    </td>
                    <td class="center">
                        <select id="provider-dominance-${slice_num}">
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
                        <select id="patient-dominance-${slice_num}">
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
                        <select id="partner-dominance-${slice_num}">
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
                        <select id="second-provider-dominance-${slice_num}">
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
                        <select id="other-staff-dominance-${slice_num}">
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
                        <select id="provider-interest-${slice_num}">
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
                        <select id="patient-interest-${slice_num}">
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
                        <select id="partner-interest-${slice_num}">
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
                        <select id="second-provider-interest-${slice_num}">
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
                        <select id="other-staff-interest-${slice_num}">
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
                        <select id="provider-warmth-${slice_num}">
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
                        <select id="patient-warmth-${slice_num}">
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
                        <select id="partner-warmth-${slice_num}">
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
                        <select id="second-provider-warmth-${slice_num}">
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
                        <select id="other-staff-warmth-${slice_num}">
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
                        <select id="provider-engage-${slice_num}">
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
                        <select id="patient-engage-${slice_num}">
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
                        <select id="partner-engage-${slice_num}">
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
                        <select id="second-provider-engage-${slice_num}">
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
                        <select id="other-staff-engage-${slice_num}">
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
                        <select id="provider-sympathy-${slice_num}">
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
                        <select id="patient-sympathy-${slice_num}">
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
                        <select id="partner-sympathy-${slice_num}">
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
                        <select id="second-provider-sympathy-${slice_num}">
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
                        <select id="other-staff-sympathy-${slice_num}">
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
                        <select id="provider-hurry-${slice_num}">
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
                    <td class="center">
                        <select id="second-provider-hurry-${slice_num}">
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
                        <select id="other-staff-hurry-${slice_num}">
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
                        Respectfulness
                    </td>
                    <td class="center">
                        <select id="provider-respect-${slice_num}">
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
                        <select id="patient-respect-${slice_num}">
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
                        <select id="partner-respect-${slice_num}">
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
                        <select id="second-provider-respect-${slice_num}">
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
                        <select id="other-staff-respect-${slice_num}">
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
                        <select id="provider-interact-${slice_num}">
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
                        <select id="patient-interact-${slice_num}">
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
                        <select id="partner-interact-${slice_num}">
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
                        <select id="second-provider-interact-${slice_num}">
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
                        <select id="other-staff-interact-${slice_num}">
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
            <b>Other Notes</b>
            What did you notice about rating this interaction?<br>
            How accurate do you think you were? Any other comments?
            <textarea id="rater_notes-${slice_num}" rows="4"></textarea>
        </div>
    </details>
    `
}

function openThinSlice(slice_select) {
    $('details').attr('open',false);
    $('#slice_'+slice_select).children().attr('open',true);
}

function calculateSlices() {
    return Math.ceil(video_player.duration / beepDelay);
}

function createThinSlices() {
    // console.log(video_player.duration);
    // console.log("create " + calculateSlices() + " thin slices");
    var num_slices = calculateSlices();
    for(i=1; i<=num_slices; i++)
    {
        var div_slice = document.createElement('div');
        div_slice.id = "slice_"+i;
        div_slice.innerHTML = globalAffectForm(i, toHMS((i-1)*beepDelay), toHMS((i)*beepDelay));
        document.getElementById('global_affect_import').appendChild(div_slice);  
    }
}
// document.getElementById('global_affect_import').insertAdjacentHTML("afterbegin", global_affect_form);


function getGlobalAffectInput() {
    var global_affect_categories = ["anger", "anxiety", "depression", "upset",
    "dominance", "interest", "warmth", "engage", "sympathy", "hurry", "respect", "interact"]
    var global_affect_speakers = ["provider", "patient", "partner", "second-provider", "other-staff"]

    var globalAffectData = "slice,time-start,time-end,";
    var category;
    var speaker;
    var lookup_id;
    var cat_idx;
    var speak_idx;
    var tot_slices = calculateSlices();

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
    globalAffectData += lookup_id+",rater_notes\n";

    var data;
    for (slice_num=1; slice_num <= tot_slices; slice_num++){
        globalAffectData += slice_num+","+toHMS((slice_num-1)*beepDelay)+","+toHMS((slice_num)*beepDelay)+",";
        for (cat_idx=0; cat_idx < global_affect_categories.length-1; cat_idx++) {
            for (speak_idx=0; speak_idx < global_affect_speakers.length; speak_idx++) {
                category = global_affect_categories[cat_idx];
                speaker = global_affect_speakers[speak_idx];
                lookup_id = speaker+"-"+category+"-"+slice_num;
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
            lookup_id = speaker+"-"+category+"-"+slice_num;
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
        lookup_id = speaker+"-"+category+"-"+slice_num;
        try {
            var el = document.getElementById(lookup_id);
            data = el.options[el.selectedIndex].text;
        }
        catch(err) {
            data = "-";
        }
        globalAffectData += data+",";
    
        lookup_id = "rater_notes-"+slice_num;
        var notes_content = document.getElementById(lookup_id).value;
        notes_content = notes_content.replace(/(\r\n|\n|\r)/gm," ");
        globalAffectData += notes_content+"\n";
    }

    return globalAffectData

}