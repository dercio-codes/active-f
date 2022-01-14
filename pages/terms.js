import Typography from "@mui/material/Typography";
import PaygateFooter from "../components/PaygateFooter";
import SectionHeader from "../components/SectionHeader";

export default () => {
  return (
    <div className="container">
      <SectionHeader txt="Terms and Conditions" />
      <br />
      <Typography>
        1. Detailed description of goods and/or services The Active Foundation
        is a The Active Foundation in the NPO industry. <br />
        2. Delivery policy Subject to availability and receipt of payment,
        requests will be processed within 10 days and delivery confirmed by way
        of booking number / booking voucher. <br />
        3. Export restriction The offering on this website is available to South
        African clients only. <br />
        4. Return and Refunds policy The provision of goods and services by us
        is subject to availability. In cases of unavailability, we will refund
        the client in full within 30 days. Cancellation of orders by the client
        will attract an administration fee. <br />
        5. Customer Privacy policy The Active Foundation Trust shall take all
        reasonable steps to protect the personal information of users. For the
        purpose of this clause, "personal information" shall be defined as
        detailed in the Promotion of Access to Information Act 2 of 2000 (PAIA).
        The PAIA may be downloaded from:
        http://www.polity.org.za/attachment.php?aa_id=3569. <br />
        6. Payment options accepted Payment may be made via Visa and MasterCard.{" "}
        <br />
        7. Card acquiring and security Card transactions will be acquired for
        The Active Foundation Trust via PayGate (Pty) Ltd who are the approved
        payment gateway for all South African Acquiring Banks. PayGate uses the
        strictest form of encryption, namely Secure Socket Layer 3 (SSL3) and no
        Card details are stored on the website. Users may go to
        www.paygate.co.za to view their security certificate and security
        policy. <br />
        8. Customer details separate from card details Customer details will be
        stored by The Active Foundation Trust separately from card details which
        are entered by the client on PayGate’s secure site. For more detail on
        PayGate refer to www.paygate.co.za. <br />
        9. Merchant Outlet country and transaction currency The merchant outlet
        country at the time of presenting payment options to the cardholder is
        South Africa. Transaction currency is South African Rand (ZAR). <br />
        10. Responsibility The Active Foundation Trust takes responsibility for
        all aspects relating to the transaction including sale of goods and
        services sold on this website, customer service and support, dispute
        resolution and delivery of goods. <br />
        11. Country of domicile This website is governed by the laws of South
        Africa and The Active Foundation Trust chooses as its domicilium citandi
        et executandi for all purposes under this agreement, whether in respect
        of court process, notice, or other documents or communication of
        whatsoever nature: 1 Example Street, Pretoria, 0184. <br />
        12. Variation The Active Foundation Trust may, in its sole discretion,
        change this agreement or any part thereof at any time without notice.{" "}
        <br />
        13. Company information This website is run by close corpoaration based
        in South Africa Trading trading as Super Clothing and with registration
        number 2019/123456/45 and Directors/Members/Owners. <br />
        14. The Active Foundation Trust contact details <br />
        Company Physical Address: 26A Loveday Street South <br />
        Email: info@theactivefoundation.co.za <br />
        Telephone: 0780343426 <br />
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   background:'red',
          minHeight: "100px",
          width: "100%",
        }}
      >
        <PaygateFooter />
      </div>
    </div>
  );
};
