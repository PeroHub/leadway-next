import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Img,
  Link,
  Section,
  Row,
  Column,
} from "@react-email/components";

interface VisaApprovalEmailProps {
  name: string;
  passportNumber: string;
  visaType: string;
  country: string;
  date: string;
}

export default function VisaApprovalEmail({
  name,
  passportNumber,
  visaType,
  country,
  date,
}: VisaApprovalEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ margin: 0, padding: 0, backgroundColor: "#f4f4f4" }}>
        {/* Full-width container */}
        <Container
          style={{
            width: "100%",
            maxWidth: "600px", // Set a max-width for better readability
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Header with Logo and Address */}
          {/* Header with Logo and Address */}
          <Section
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column", // Stack items vertically
              alignItems: "center", // Center horizontally
              textAlign: "center", // Ensure text is centered
              gap: "10px", // Add spacing between elements
            }}
          >
            <Link href="https://www.legalpathwayimmigrationlawfirm.org">
              <Img
                src="https://res.cloudinary.com/dywd8r6rd/image/upload/v1741782026/logo3_ewikx4.png"
                alt="Legal Pathway Immigration"
                width="150"
                style={{ display: "block", margin: "0 auto" }}
              />
            </Link>
            <Text style={{ margin: "0 auto", textAlign: "center" }}>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=3250+Bloor+St+W+Suite+600,+Toronto,+ON+M8X+2X9,+Canada"
                style={{
                  fontWeight: "bold",
                }}
              >
                3250 Bloor St W Suite 600, Etobicoke, ON M9X 2Y4, Canada
              </Link>
            </Text>
          </Section>

          {/* Eligibility Check Title */}
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            ELIGIBILITY CHECK
          </Text>

          {/* Visa Approval Details */}
          <Section>
            <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
              <strong>NAME:</strong> {name}
            </Text>
            <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
              <strong>PASSPORT NUMBER:</strong> {passportNumber}
            </Text>
            <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
              <strong>VISA APPLICATION:</strong> {visaType}
            </Text>
            <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
              <strong>COUNTRY:</strong> {country}
            </Text>
            <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
              <strong>DATE:</strong> {date}
            </Text>
          </Section>

          {/* Verification Successful */}
          <Text
            style={{
              fontSize: "18px",
              textAlign: "center",

              fontWeight: "bold",
              margin: "20px 0 10px 0",
            }}
          >
            VERIFICATION SUCCESSFUL
          </Text>

          <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
            Dear {name},
          </Text>
          <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
            We are pleased to inform you that subject to the fulfillment of all
            Immigration procedures under relevant laws in Canada and the Labour
            Act of 1986, your documents have been completely verified.
          </Text>
          <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
            Your submitted documents have been thoroughly checked. You meet
            requirements for {visaType} Application.
          </Text>
          <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
            You have been found eligible to apply for your{" "}
            <span style={{ color: "red" }}>
              {visaType} APPLICATION PROCESS.
            </span>
          </Text>
          <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
            This is to certify that these documents with the above name are{" "}
            <span style={{ color: "red" }}>APPROVED, AUTHORIZED </span> and
            required to make a payment for{" "}
            <span style={{ color: "red" }}>{visaType}</span>.
          </Text>
          <Text style={{ margin: "10px 0", fontWeight: "bold" }}>
            However, applicant(s) are required to make a deposit payment of a{" "}
            <span style={{ color: "red" }}>REFUNDABLE REGISTRATION FEE</span>{" "}
            through your consultant.
          </Text>

          {/* Next Steps */}
          <Text
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              margin: "20px 0 10px 0",
            }}
          >
            Here&apos;s the next stage to get started:
          </Text>
          <ul
            style={{
              margin: "10px 0",
              paddingLeft: "20px",
              fontWeight: "bold",
            }}
          >
            <li>Registration Fees Payment*</li>
            <li>
              Payment of required fees to initiate the registration process.
            </li>
            <li>
              Fees cover administrative costs, application processing, and
              consultation services.
            </li>
            <li>Application Initiation</li>
            <li>Completion and submission of application forms.</li>
            <li>Upload of supporting documents</li>
            <li>Official start of the immigration process.</li>
          </ul>

          {/* Note */}
          <Text
            style={{
              fontSize: "14px",
              // color: "gray",
              margin: "20px 0",
              fontWeight: "bold",
            }}
          >
            NOTE: Applicant(s) are expected to effect a response of their
            ELIGIBILITY RESULTS within 72 working hours, else eligibility will
            be expired. Once your application process is initiated at the
            embassy, you can expect to receive regular updates and
            correspondence directly from the agency, your designated consultant,
            and the embassy itself.
          </Text>
          <Text
            style={{
              fontSize: "14px",
              // color: "gray",
              margin: "20px 0",
              fontWeight: "bold",
            }}
          >
            If you have any questions or concerns, please do not hesitate to
            consult your consultant or customer service through the official
            mail address.
          </Text>
          <Text
            style={{
              fontSize: "14px",
              // color: "gray",
              margin: "20px 0",
              fontWeight: "bold",
            }}
          >
            We appreciate your trust in LEGAL PATHWAY IMMIGRATION LAW FIRM and
            look forward to supporting your Canadian journey!
          </Text>

          {/* Footer with Logos */}
          <Section align="center" style={{ width: "100%", marginTop: "20px" }}>
            <Row>
              <Column style={{ width: "33%", textAlign: "center" }}>
                <Link href="https://www.legalpathwayimmigrationlawfirm.org">
                  <Img
                    src="https://res.cloudinary.com/dywd8r6rd/image/upload/v1741783451/canada1_en3amo.png"
                    alt="Canada Immigration"
                    width="150"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                </Link>
              </Column>
              <Column style={{ width: "33%", textAlign: "center" }}>
                <Link href="https://www.legalpathwayimmigrationlawfirm.org">
                  <Img
                    src="https://res.cloudinary.com/dywd8r6rd/image/upload/v1741783487/canada2_tigjgl.png"
                    alt="Canada Immigration"
                    width="150"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                </Link>
              </Column>
              <Column style={{ width: "33%", textAlign: "center" }}>
                <Link href="https://www.legalpathwayimmigrationlawfirm.org">
                  <Img
                    src="https://res.cloudinary.com/dywd8r6rd/image/upload/v1741783487/canada2_tigjgl.png"
                    alt="Canada Immigration"
                    width="150"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
