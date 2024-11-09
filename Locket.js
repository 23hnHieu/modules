// ========= ID ========= //
const mapping = {
  "%E8%BD%A6%E7%A5%A8%E7%A5%A8": ["vip+watch_vip"],
  Locket: ["Gold"],
};
// =========   Phần cố định  ========= //
// =========  @Ohoang7 ========= //
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention =
  "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var bmhieu = {
    is_sandbox: !1,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: "3000-12-04T01:04:17Z",
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: "2030-12-04T01:04:18Z",
    purchase_date: "2030-12-04T01:04:17Z",
    store: "app_store",
  },
  hieu2006 = {
    grace_period_expires_date: null,
    purchase_date: "2030-12-04T01:04:17Z",
    product_identifier: "com.bmhieu4126.premium.yearly",
    expires_date: "3000-12-04T01:04:17Z",
  };
const match = Object.keys(mapping).find((e) => ua.includes(e));
if (match) {
  let [e, s] = mapping[match];
  s
    ? ((hieu2006.product_identifier = s),
      (obj.subscriber.subscriptions[s] = bmhieu))
    : (obj.subscriber.subscriptions["com.bmhieu4126.premium.yearly"] = bmhieu),
    (obj.subscriber.entitlements[e] = hieu2006);
} else
  (obj.subscriber.subscriptions["com.bmhieu4126.premium.yearly"] = bmhieu),
    (obj.subscriber.entitlements.pro = heiu2006);
$done({ body: JSON.stringify(obj) });
