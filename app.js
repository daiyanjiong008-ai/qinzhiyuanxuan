
    const moduleMeta = {
      home: ["首页", "欢迎进入亲至源选供应商管理系统，店铺已开通，可开始使用后台能力。"],
      overview: ["数据概览", "聚合商品、财务、商家核心经营数据，快速定位待处理事项。"],
      product: ["商品中心", "店铺未完成开通，当前仅可进行试样提报。"],
      finance: ["财务中心", "店铺未完成开通，当前仅可查看和处理保证金管理。"],
      "finance-assets": ["账户资产", "查看账户余额、冻结金额和可用资产，店铺开通后开放完整能力。"],
      "finance-reconcile": ["保证金对账", "查看保证金打款、凭证审核、到账确认和对账状态。"],
      "finance-flow": ["保证金流水", "查看保证金缴纳、扣款、补缴和退还流水记录。"],
      merchant: ["商家中心", "店铺未完成开通，当前可查看进驻状态，并维护商家资料、验厂记录、合同协议。"],
      "merchant-profile": ["商家资料", "查看供应商基础、售后、财务、认证、资质材料及合同信息。"],
      "merchant-address": ["地址管理", "统一维护售后地址与试样退货地址，试样提报仅校验试样退货地址。"],
      "merchant-factory-record": ["验厂记录", "查看验厂申请、平台审核、补交资料和验厂结果状态。"],
      "merchant-contract": ["合同协议", "查看待签署和已签署的入驻协议数据。"],
      "system-role": ["角色管理", "用于配置后台账户角色、权限范围和页面访问规则。"],
      "system-account": ["子账户管理", "用于管理供应商后台子账户，页面内容后续补充。"],
      "sample-apply": ["试样提报申请", "填写商品与价格资料，提交后进入招商初审。"],
      "sample-platform": ["商品详情", "平台正在审核商品资料、价格信息和合作匹配度。"],
      "sample-stage": ["商品详情", "查看试样寄送、评测和通过状态下的处理信息。"],
      "sample-detail": ["试样商品详情", "查看不同试样状态下的商品详情、处理人和下一步动作。"],
      "wechat-onboarding": ["微信支付进件", "完善主体、法人及超级管理员信息并提交微信审核。"]
    };
    const moduleNavMap = {
      "merchant-address": "merchant",
      "merchant-profile": "merchant",
      "merchant-factory-record": "merchant",
      "merchant-contract": "merchant",
      "finance-assets": "finance",
      "finance-reconcile": "finance",
      "finance-flow": "finance",
      "system-account": "system-role",
      "sample-apply": "product",
      "sample-platform": "product",
      "sample-stage": "product",
      "sample-detail": "merchant",
      "wechat-onboarding": "merchant"
    };
    const stageOrder = { apply: 1, audit: 2, ship: 3, pricing: 4, quality: 5, testing: 4, failed: 5, passed: 6 };
    const sampleStageMap = {
      ship: {
        title: "待寄样",
        status: "待寄样",
        owner: "供应商",
        time: "2026-07-06 11:30:00",
        next: "填写物流信息",
        section: "待寄样处理",
        footer: '<button class="primary-btn" type="button" id="openLogisticsModalBtn">提交物流信息</button><button class="secondary-btn" type="button" data-page-link="product">返回列表</button>',
        body: `
          <div class="stage-content-grid three">
            <div class="stage-info-box"><label>平台收样地址</label><strong>亲至源选样品中心</strong><p>广东省广州市天河区样品审核仓 3 号库</p></div>
            <div class="stage-info-box"><label>收件人</label><strong>平台品控组</strong><p>联系电话：020-88888888</p></div>
            <div class="stage-info-box"><label>寄样要求</label><strong>2 份完整样品</strong><p>需保持原包装完整，外箱备注商品名称和提报编号。</p></div>
            <div class="stage-info-box"><label>快递公司</label><strong>顺丰速运</strong><p>示例单号：SF1234567890</p></div>
            <div class="stage-info-box"><label>物流状态</label><strong class="orange">待供应商寄出</strong><p>招商初审通过后，供应商需补充物流信息。</p></div>
            <div class="stage-info-box"><label>预计处理</label><strong>寄出后 1-2 个工作日送达</strong><p>提交物流信息后等待招商收样审核。</p></div>
          </div>`
      },
      pricing: {
        title: "样品核价",
        status: "核价审核中",
        owner: "核价部",
        time: "2026-07-07 14:00:00",
        next: "等待核价结果",
        section: "样品核价进度",
        footer: '<button class="primary-btn" type="button" data-jump-stage="quality">模拟核价通过</button><button class="secondary-btn" type="button" data-jump-stage="failed">模拟核价不通过</button><button class="secondary-btn" type="button" data-page-link="product">返回列表</button>',
        body: `
          <div class="stage-content-grid three">
            <div class="stage-info-box"><label>样品签收</label><strong class="green">已签收</strong><p>签收时间：2026-07-07 10:26:00</p></div>
            <div class="stage-info-box"><label>核价状态</label><strong class="orange">核价中</strong><p>核价部正在审核价格资料。</p></div>
            <div class="stage-info-box"><label>审核部门</label><strong>核价部</strong><p>负责商品价格与成本合理性审核。</p></div>
            <div class="stage-info-box"><label>供货价</label><strong>¥89.00</strong><p>核对供应商供货报价。</p></div>
            <div class="stage-info-box"><label>市场价格</label><strong>¥199.00</strong><p>核对公域售价与大促最低到手价。</p></div>
            <div class="stage-info-box"><label>核价结果</label><strong>待反馈</strong><p>不通过时将反馈原因并退回重新提报。</p></div>
          </div>`
      },
      quality: {
        title: "样品检验",
        status: "品控检验中",
        owner: "品控部",
        time: "2026-07-08 10:00:00",
        next: "等待品控结果",
        section: "样品检验进度",
        footer: '<button class="primary-btn" type="button" data-jump-stage="passed">模拟品控通过</button><button class="secondary-btn" type="button" data-jump-stage="failed">模拟品控不通过</button><button class="secondary-btn" type="button" data-page-link="product">返回列表</button>',
        body: `<div class="stage-content-grid three">
          <div class="stage-info-box"><label>样品签收</label><strong class="green">已签收</strong><p>招商已确认收到样品。</p></div>
          <div class="stage-info-box"><label>核价结果</label><strong class="green">已通过</strong><p>核价部审核通过。</p></div>
          <div class="stage-info-box"><label>检验部门</label><strong>品控部</strong><p>负责品质、包装、规格及合规检验。</p></div>
          <div class="stage-info-box"><label>品质检验</label><strong class="orange">进行中</strong><p>检查样品品质与商品描述一致性。</p></div>
          <div class="stage-info-box"><label>包装检验</label><strong class="orange">进行中</strong><p>检查包装完整性及标签信息。</p></div>
          <div class="stage-info-box"><label>检验结果</label><strong>待反馈</strong><p>通过后完成上新审核。</p></div>
        </div>`
      },
      passed: {
        title: "已通过",
        status: "上新通过",
        owner: "核价部 / 品控部",
        time: "2026-07-09 16:30:00",
        next: "完成入驻申请",
        section: "评测结果",
        returnBack: "寄回",
        returnInfo: '<label>样品回寄快递信息</label><div class="stage-content-grid three" style="padding:0;margin-top:8px"><div class="stage-info-box"><label>快递公司</label><strong>顺丰速运</strong></div><div class="stage-info-box"><label>快递单号</label><strong>SF1234567890</strong></div><div class="stage-info-box"><label>发货人</label><strong>平台品控组</strong><p>发货人手机号：138****8000</p></div></div>',
        footer: '<button class="primary-btn" type="button" id="passedPrimaryAction">上新通过</button><button class="secondary-btn" type="button" data-page-link="product">返回列表</button>',
        body: `
          <div class="stage-content-grid three">
            <div class="stage-info-box"><label>上新结论</label><strong class="green">通过</strong><p>核价审核与品控检验均已通过。</p></div>
            <div class="stage-info-box"><label>通过时间</label><strong>2026-07-09 16:30:00</strong><p>平台已完成试样评测并确认通过。</p></div>
            <div class="stage-info-box"><label>下一流程</label><strong id="passedFlowTitle">完成入驻申请</strong><p id="passedFlowDesc">未完成入驻时进入完成入驻流程。</p></div>
            <div class="stage-info-box wide">
              <div class="mini-switch">
                <button class="active" type="button" data-passed-mode="onboarding">未完成入驻</button>
                <button type="button" data-passed-mode="listing">已完成入驻</button>
              </div>
              <label>评测说明</label>
              <strong id="passedNoticeTitle">建议进入后续入驻流程</strong>
              <p id="passedNoticeDesc">该商品包装完整，价格信息清晰，供应商具备后续合作基础。平台建议进入验厂与协议环节。</p>
            </div>
          </div>`
      },
      failed: {
        title: "不通过",
        status: "上新不通过",
        owner: "核价部 / 品控部",
        time: "2026-07-09 16:30:00",
        next: "修改资料后重新提报",
        section: "评测不通过原因",
        returnBack: "不寄回",
        footer: '<button class="primary-btn" type="button" data-jump-stage="apply">修改后重新提报</button><button class="secondary-btn" type="button" data-page-link="product">返回列表</button>',
        body: `
          <div class="stage-content-grid three">
            <div class="stage-info-box"><label>评测结论</label><strong style="color:var(--danger)">不通过</strong><p>样品暂不满足平台上新评测要求。</p></div>
            <div class="stage-info-box"><label>反馈时间</label><strong>2026-07-09 16:30:00</strong><p>平台已完成本轮样品评测。</p></div>
            <div class="stage-info-box"><label>处理建议</label><strong>修改后重新提报</strong><p>供应商可根据反馈优化资料或样品后再次提交。</p></div>
            <div class="stage-info-box wide"><label>不通过原因</label><strong>包装与价格匹配度需补充说明</strong><p>1. 商品外包装与平台展示规范不完全匹配，建议补充包装细节图。<br />2. 当前价格信息缺少大促供货策略说明，建议补充活动价和成本说明。<br />3. 样品核心卖点表达较弱，需明确适用场景和差异化优势。</p></div>
            <div class="stage-info-box wide"><label>重新提报要求</label><strong>补充资料后重新进入平台处理</strong><p>重新提报时需更新商品图片、核心卖点、价格信息和补充说明。重新提交后进入平台处理环节。</p></div>
          </div>`
      }
    };
    const sampleStatusMap = {
      apply: ["试样提报详情", "待提交", "2026-07-02 11:10", "供应商", "填写意向合作爆品、样品资料、价格和寄样准备信息。", "提交试样申请"],
      audit: ["招商初审详情", "招商初审中", "2026-07-02 11:32", "招商", "招商正在审核商品资料和合作匹配度。", "等待初审结果"],
      ship: ["寄送样品详情", "待寄送样品", "2026-07-03 09:20", "供应商", "初审通过后由供应商填写物流信息并寄送样品。", "填写样品物流"],
      pricing: ["样品核价详情", "核价中", "2026-07-04 14:00", "核价部", "核价部正在审核价格及成本信息。", "等待核价结果"],
      quality: ["样品检验详情", "品控检验中", "2026-07-05 10:00", "品控部", "品控部正在检验样品品质、包装与合规情况。", "等待检验结果"],
      failed: ["上新不通过详情", "上新不通过", "2026-07-07 16:30", "核价部/品控部", "核价或品控审核未通过，需按反馈修改后重新提报。", "查看原因并重新提报"],
      passed: ["上新通过详情", "上新通过", "2026-07-07 16:30", "核价部/品控部", "核价与品控均通过，可进入后续验厂申请环节。", "进入验厂申请"]
    };
    const samplePassedVariants = {
      onboarding: {
        next: "完成入驻申请",
        flow: "完成入驻申请",
        flowDesc: "未完成入驻时进入完成入驻流程。",
        title: "建议进入后续入驻流程",
        desc: "该商品包装完整，价格信息清晰，供应商具备后续合作基础。平台建议进入验厂与协议环节。",
        button: "上新通过",
        toast: "已进入完成入驻流程"
      },
      listing: {
        next: "商品申请上架",
        flow: "商品申请上架",
        flowDesc: "已完成入驻时进入商品申请上架。",
        title: "建议商品上架发布流程",
        desc: "该商品包装完整，价格信息清晰，供应商具备后续合作基础。平台建议可进入商品申请上架环节。",
        button: "商品申请上架",
        toast: "已进入商品申请上架"
      }
    };
    const sampleRows = [
      {
        id: 101,
        tab: "pending",
        statusKey: "apply",
        product: "黛莱美测试商品【草稿】",
        spec: "规格名称：容量300ml<br />品类：护肤品<br />品牌：黛莱美",
        sales: "去年销售额：10.00万<br />上月销售额：10.00万",
        price: "亲至源选供货价：￥89<br />建议运营售价：￥189<br />公域价格：￥199<br />大促最低到手价：￥189<br />除亲至源选外最低供货价：￥89<br />商品成本：￥69",
        channel: "线上",
        returnBack: "不寄回",
        status: "草稿",
        source: "OMS",
        time: "2026-07-06 10:20:16",
        canDelete: true
      },
      {
        id: 102,
        tab: "pending",
        statusKey: "audit",
        product: "黛莱美测试商品【无须审核】",
        spec: "规格名称：容量300ml<br />品类：护肤品<br />品牌：黛莱美",
        sales: "去年销售额：10.00万<br />上月销售额：10.00万",
        price: "亲至源选供货价：￥89<br />建议运营售价：￥189<br />公域价格：￥199<br />大促最低到手价：￥189<br />除亲至源选外最低供货价：￥89<br />商品成本：￥69",
        channel: "线上",
        returnBack: "不寄回",
        status: "待处理",
        source: "OMS",
        time: "2026-07-06 11:05:16",
        canDelete: false
      },
      {
        id: 103,
        tab: "pending",
        statusKey: "ship",
        product: "山茶花洁面乳",
        spec: "规格名称：150ml<br />品类：个护清洁<br />品牌：森系实验室",
        sales: "去年销售额：80.00万<br />上月销售额：8.00万",
        price: "亲至源选供货价：￥39<br />建议运营售价：￥79<br />公域价格：￥99<br />大促最低到手价：￥69<br />除亲至源选外最低供货价：￥38<br />商品成本：￥26",
        channel: "线上",
        returnBack: "寄回",
        status: "待寄样",
        source: "OMS",
        time: "2026-07-06 14:18:30",
        canDelete: false
      },
      {
        id: 104,
        tab: "pending",
        statusKey: "pricing",
        product: "益生菌冻干粉",
        spec: "规格名称：30条/盒<br />品类：营养保健<br />品牌：轻养计划",
        sales: "去年销售额：260.00万<br />上月销售额：22.00万",
        price: "亲至源选供货价：￥59<br />建议运营售价：￥129<br />公域价格：￥159<br />大促最低到手价：￥109<br />除亲至源选外最低供货价：￥58<br />商品成本：￥42",
        channel: "天猫、抖音",
        returnBack: "不寄回",
        status: "核价中",
        source: "OMS",
        time: "2026-07-07 10:12:45",
        canDelete: false
      },
      {
        id: 105,
        tab: "passed",
        statusKey: "passed",
        product: "竹纤维纸巾组合",
        spec: "规格名称：家庭装<br />品类：日用清洁<br />品牌：亲至源选",
        sales: "去年销售额：520.00万<br />上月销售额：46.00万",
        price: "亲至源选供货价：￥19.9<br />建议运营售价：￥39.9<br />公域价格：￥49.9<br />大促最低到手价：￥29.9<br />除亲至源选外最低供货价：￥18.9<br />商品成本：￥12.9",
        channel: "线下商超、社群",
        returnBack: "不寄回",
        status: "已通过",
        source: "OMS",
        time: "2026-07-02 16:42",
        canDelete: false
      },
      {
        id: 106,
        tab: "pending",
        statusKey: "failed",
        product: "胶原蛋白饮",
        spec: "规格名称：50ml*10瓶<br />品类：营养饮品<br />品牌：元气胶原",
        sales: "去年销售额：120.00万<br />上月销售额：9.00万",
        price: "亲至源选供货价：￥88<br />建议运营售价：￥199<br />公域价格：￥239<br />大促最低到手价：￥179<br />除亲至源选外最低供货价：￥86<br />商品成本：￥61",
        channel: "抖音、社群",
        returnBack: "寄回",
        status: "上新不通过",
        source: "OMS",
        time: "2026-07-08 15:40:22",
        canDelete: true
      }
    ];
    const sampleListState = { hasData: true, tab: "all" };
    let samplePassedMode = "onboarding";
    let merchantSampleStatus = "apply";
    let factoryStatus = "apply";
    let factorySupplementEnabled = false;
    const toast = document.getElementById("toast");
    function getSampleListStatus(row) {
      return row.status === "草稿" ? "待提交" : row.status;
    }
    function getSampleStatusClass(row) {
      if (row.status === "已通过") return "green";
      if (row.status === "上新不通过") return "red";
      return "sample-dot-status";
    }
    function showToast(text) {
      toast.textContent = text;
      toast.classList.add("show");
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
    }
    async function copyCurrentPageScreenshot() {
      const button = document.getElementById("copyScreenshotBtn");
      const target = document.querySelector(".main");
      if (!target || !navigator.clipboard || !window.ClipboardItem) {
        showToast("当前浏览器不支持直接复制截图");
        return;
      }
      const originalText = button.innerHTML;
      button.disabled = true;
      button.innerHTML = '<iconify-icon icon="icon-park-outline:loading-four"></iconify-icon> 生成中';
      try {
        const rect = target.getBoundingClientRect();
        const width = Math.ceil(rect.width);
        const height = Math.ceil(Math.min(target.scrollHeight, 2200));
        const cloned = target.cloneNode(true);
        cloned.querySelector("#copyScreenshotBtn")?.remove();
        cloned.style.width = `${width}px`;
        cloned.style.minHeight = `${height}px`;
        cloned.style.background = "#F3F4F6";
        cloned.style.transform = "none";
        cloned.style.margin = "0";
        const styles = Array.from(document.querySelectorAll("style"))
          .map(style => style.textContent)
          .join("\n");
        const html = `
          <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
              
              
            </head>
            <body>${cloned.outerHTML}</body>
          </html>`;
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
            <foreignObject width="100%" height="100%">
              ${html}
            </foreignObject>
          </svg>`;
        const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
        const image = new Image();
        image.decoding = "async";
        await new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
          image.src = url;
        });
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#F3F4F6";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(image, 0, 0);
        URL.revokeObjectURL(url);
        const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png", 1));
        if (!blob) throw new Error("empty image");
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        showToast("当前页面截图已复制，可直接粘贴到需求文档");
      } catch (error) {
        showToast("截图复制失败，请使用系统截图后粘贴");
      } finally {
        button.disabled = false;
        button.innerHTML = originalText;
      }
    }
    function switchModule(name, trigger) {
      const navName = moduleNavMap[name] || name;
      document.querySelectorAll(".nav-main[data-module]").forEach(node => node.classList.toggle("active", node.dataset.module === navName));
      document.querySelectorAll(".subnav button").forEach(node => node.classList.remove("active"));
      const subnavButton = trigger?.closest?.(".subnav") ? trigger : document.querySelector(`.subnav button[data-module="${name}"]`) || document.querySelector(`.nav-main[data-module="${navName}"] + .subnav button`);
      subnavButton?.classList.add("active");
      document.querySelectorAll("[data-page]").forEach(page => page.classList.toggle("active", page.dataset.page === name));
      document.getElementById("pageTitle").textContent = moduleMeta[name][0];
      document.getElementById("pageDesc").textContent = moduleMeta[name][1];
      document.getElementById("activeTab").textContent = moduleMeta[name][0];
    }
    function updateFlowSummary(type) {
      const map = {
        reviewDetailPanel: ["提交初审资料", "试样提报", "已完成", "未开通"],
        sampleFlowPanel: ["试样提报", "招商初审", "1-2 个工作日", "未开通"],
        factoryPanel: ["申请验厂", "提交验厂申请", "1-3 个工作日", "未开通"],
        contractPanel: ["签署入驻协议", "缴纳保证金", "签署后进入下一步", "未开通"],
        depositPanel: ["缴纳保证金", "店铺开通成功", "财务确认后开通", "未开通"],
        shopOpenPanel: ["店铺开通成功", "暂无", "暂无", "已开通"]
      };
      const data = map[type] || map.sampleFlowPanel;
      document.getElementById("summaryStage").textContent = data[0];
      document.getElementById("summaryNext").textContent = data[1];
      document.getElementById("summaryEta").textContent = data[2];
      const shopStatus = document.getElementById("summaryShopStatus");
      shopStatus.textContent = data[3];
      shopStatus.className = data[3] === "已开通" ? "green" : "orange";
    }
    function updateOnboardingFlowProgress(currentTarget, activePanelTarget = currentTarget) {
      const order = ["reviewDetailPanel", "sampleFlowPanel", "factoryPanel", "contractPanel", "depositPanel", "shopOpenPanel"];
      const currentIndex = Math.max(order.indexOf(currentTarget), 0);
      const isTerminal = currentTarget === "shopOpenPanel";
      document.querySelectorAll(".flow-step[data-panel-target]").forEach(step => {
        const stepIndex = order.indexOf(step.dataset.panelTarget);
        step.classList.toggle("done", stepIndex > -1 && (stepIndex < currentIndex || (isTerminal && stepIndex === currentIndex)));
        step.classList.toggle("current", !isTerminal && stepIndex === currentIndex);
        step.classList.toggle("panel-active", step.dataset.panelTarget === activePanelTarget);
      });
    }
    const factoryFlowStates = {
      apply: {
        active: "apply",
        next: "提交验厂申请",
        eta: "1-3 个工作日",
        button: "申请验厂",
        desc: "提交验厂资料，验厂通过后进入协议环节。",
        nodes: {
          apply: ["待提交", "待供应商提交"],
          audit: ["待开始", "未开始"],
          pay: ["待开始", "未开始"],
          paid: ["待开始", "未开始"],
          supplement: ["待开始", "未开始"],
          result: ["待开始", "待输出"]
        }
      },
      audit: {
        active: "audit",
        next: "平台确认中",
        eta: "1-3 个工作日",
        button: "平台确认中",
        desc: "验厂申请已提交，平台正在审核验厂资料和工厂信息。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["待审核", "待审核"],
          pay: ["待开始", "未开始"],
          paid: ["待开始", "未开始"],
          supplement: ["待开始", "未开始"],
          result: ["待开始", "待输出"]
        }
      },
      noNeed: {
        active: "result",
        next: "签署入驻协议",
        eta: "已完成",
        button: "验厂通过",
        desc: "平台审核确认无需验厂，可直接进入签署入驻协议环节。",
        compactResult: true,
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["无需验厂", "无需验厂"],
          pay: ["无需支付", "不展示"],
          paid: ["无需支付", "不展示"],
          supplement: ["无需补充", "不展示"],
          result: ["已通过", "无需验厂"]
        }
      },
      pay: {
        active: "pay",
        next: "上传打款凭证",
        eta: "待上传",
        button: "上传打款凭证",
        desc: "品控审核通过，请完成线下对公转账并上传打款凭证。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          pay: ["待上传", "待上传"],
          paid: ["待开始", "未开始"],
          supplement: ["待开始", "未开始"],
          result: ["待开始", "待输出"]
        }
      },
      paid: {
        active: "paid",
        next: "平台审核打款凭证",
        eta: "平台审核中",
        button: "凭证审核中",
        desc: "打款凭证已上传，平台正在核对到账金额与凭证信息；不通过时需重新上传。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          pay: ["已上传", "凭证已上传"],
          paid: ["待审核", "审核中"],
          supplement: ["待开始", "未开始"],
          result: ["待开始", "待输出"]
        }
      },
      voucherRejected: {
        active: "paid",
        next: "重新上传打款凭证",
        eta: "待供应商处理",
        button: "重新上传凭证",
        desc: "平台审核打款凭证不通过，请根据反馈重新上传真实、清晰且可核验的凭证。",
        nodes: {
          apply: ["已提交", "已提交"], audit: ["已通过", "需验厂"], pay: ["已上传", "凭证已上传"],
          paid: ["不通过", "凭证审核不通过"], arrange: ["待开始", "未开始"], supplement: ["待开始", "未开始"], result: ["待开始", "待输出"]
        }
      },
      arrange: {
        active: "arrange",
        next: "验厂中",
        eta: "验厂处理中",
        button: "验厂中",
        desc: "平台审核凭证通过，品控部或三方专业机构正在执行验厂。",
        nodes: {
          apply: ["已提交", "已提交"], audit: ["需验厂", "已确认验厂方式"], pay: ["已上传", "已上传凭证"],
          paid: ["已通过", "平台审核通过"], arrange: ["验厂中", "验厂中"], supplement: ["待开始", "未开始"], result: ["待开始", "待输出"]
        }
      },
      needSupplement: {
        active: "supplement",
        next: "提交验厂资料",
        eta: "待供应商补充",
        button: "提交验厂资料",
        desc: "平台要求供应商补交验厂资料，提交后由平台复核并输出验厂结果。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          pay: ["已上传", "凭证已上传"],
          paid: ["已通过", "平台审核通过"],
          supplement: ["待开始", "待提交"],
          result: ["待开始", "待输出"]
        }
      },
      delayed: {
        active: "result",
        next: "签署入驻协议",
        eta: "已完成",
        button: "验厂通过",
        desc: "平台确认可延后验厂，本次流程直接进入验厂通过并继续协议环节。",
        compactResult: true,
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["延后验厂", "延后验厂"],
          pay: ["无需支付", "不展示"],
          paid: ["无需支付", "不展示"],
          supplement: ["无需补充", "不展示"],
          result: ["已通过", "延后验厂"]
        }
      },
      supplement: {
        active: "supplement",
        next: "输出验厂结果",
        eta: "补交后平台复核",
        button: "已补充报告",
        desc: "供应商已补交 PDF、图片或视频资料，平台复核后输出验厂结果。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          pay: ["已上传", "凭证已上传"],
          paid: ["已通过", "平台审核通过"],
          supplement: ["已提交", "已提交"],
          result: ["待开始", "待输出"]
        }
      },
      passed: {
        active: "result",
        next: "签署入驻协议",
        eta: "已完成",
        button: "验厂通过",
        desc: "验厂已通过，可进入签署入驻协议环节。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          pay: ["已上传", "凭证已上传"],
          paid: ["已通过", "平台审核通过"],
          supplement: ["已补交", "已补交"],
          result: ["已通过", "验厂通过"]
        }
      },
      failed: {
        active: "result",
        next: "修改后重新提交",
        eta: "待供应商处理",
        button: "修改后重新提交",
        desc: "验厂未通过，请根据平台反馈补充资料或整改后重新提交。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          pay: ["已上传", "凭证已上传"],
          paid: ["已通过", "平台审核通过"],
          supplement: ["已补交", "已补交"],
          result: ["不通过", "验厂不通过"]
        }
      }
      ,gradeB: {
        active: "result",
        next: "重新提交验厂申请",
        eta: "待整改",
        button: "重新提交验厂申请",
        desc: "验厂评级为 B，供应商整改后需重新发起验厂申请。",
        nodes: {
          apply: ["已提交", "已提交"], audit: ["已通过", "需验厂"], pay: ["已上传", "凭证已上传"],
          paid: ["已通过", "平台审核通过"], arrange: ["已完成", "验厂完成"], supplement: ["已补交", "已补交"], result: ["不通过", "B级需整改"]
        }
      }
    };
    function setFactoryNodeMeta(nodeKey, statusText, resultText) {
      const node = document.querySelector(`[data-factory-node="${nodeKey}"]`);
      if (!node) return;
      const statusStrong = node.querySelector(".node-meta strong");
      const resultStrong = node.querySelector(".node-body .audit-box strong");
      const resultMetaStrong = node.querySelector("[data-factory-result-meta]");
      if (statusStrong) {
        statusStrong.textContent = statusText;
        statusStrong.className = "";
        if (["已提交", "已通过", "已上传", "已预约", "已支付", "已完成", "支付成功", "无需验厂", "延后验厂", "无需预约", "无需支付", "无需补交", "无需补充", "已补交"].includes(statusText)) statusStrong.classList.add("green");
        if (["待提交", "待审核", "审核中", "验厂中", "待上传", "待支付", "补交资料", "补充验厂报告", "待补交", "待补充"].includes(statusText)) statusStrong.classList.add("orange");
        if (["不通过"].includes(statusText)) statusStrong.classList.add("red");
      }
      if (resultStrong) {
        resultStrong.textContent = resultText;
        resultStrong.className = statusStrong?.className || "";
      }
      if (resultMetaStrong) {
        resultMetaStrong.textContent = resultText;
        resultMetaStrong.className = statusStrong?.className || "";
      }
    }
    function updateFactoryFlow(status = factoryStatus) {
      factoryStatus = status;
      const state = factoryFlowStates[status] || factoryFlowStates.apply;
      document.getElementById("summaryStage").textContent = "申请验厂";
      document.getElementById("summaryNext").textContent = state.next;
      document.getElementById("summaryEta").textContent = state.eta;
      const shopStatus = document.getElementById("summaryShopStatus");
      shopStatus.textContent = "未开通";
      shopStatus.className = "orange";
      document.getElementById("factoryFlowDesc").textContent = state.desc;
      const primary = document.getElementById("factoryPrimaryBtn");
      if (primary) primary.textContent = state.button;
      document.querySelectorAll("[data-factory-flow-node]").forEach(node => {
        const order = ["apply", "audit", "pay", "paid", "arrange", "supplement", "result"];
        const nodeIndex = order.indexOf(node.dataset.factoryFlowNode);
        const activeIndex = order.indexOf(state.active);
        const isComplete = ["passed", "noNeed", "delayed"].includes(status);
        const hiddenByCompact = state.compactResult && ["pay", "paid", "arrange"].includes(node.dataset.factoryFlowNode);
        const hiddenOptionalSupplement = node.dataset.factoryFlowNode === "supplement" && !factorySupplementEnabled;
        const keepBaseThreeSteps = ["apply", "audit"].includes(status);
        const hiddenByInitial = keepBaseThreeSteps && ["pay", "paid", "arrange", "supplement"].includes(node.dataset.factoryFlowNode);
        node.style.display = hiddenByCompact || hiddenOptionalSupplement || hiddenByInitial ? "none" : "";
        node.classList.toggle("done", isComplete ? nodeIndex <= activeIndex : nodeIndex < activeIndex);
        node.classList.toggle("active", !isComplete && nodeIndex === activeIndex);
        node.classList.toggle("pending", nodeIndex > activeIndex);
      });
      const payNode = document.getElementById("factoryPayNode");
      const paidNode = document.getElementById("factoryPaidNode");
      const supplementNode = document.getElementById("factorySupplementNode");
      const supplementNodeNumber = document.getElementById("factorySupplementNodeNumber");
      const arrangeNode = document.getElementById("factoryArrangeNode");
      const resultNode = document.getElementById("factoryResultNode");
      const resultNodeNumber = document.getElementById("factoryResultNodeNumber");
      if (payNode && paidNode && arrangeNode && supplementNode && supplementNodeNumber && resultNode && resultNodeNumber) {
        const keepBaseThreeSteps = ["apply", "audit"].includes(status);
        payNode.style.display = state.compactResult || keepBaseThreeSteps ? "none" : "";
        paidNode.style.display = state.compactResult || keepBaseThreeSteps ? "none" : "";
        arrangeNode.style.display = state.compactResult || keepBaseThreeSteps ? "none" : "";
        supplementNode.style.display = !factorySupplementEnabled || keepBaseThreeSteps ? "none" : "";
        resultNode.style.display = "";
        supplementNodeNumber.textContent = state.compactResult ? "3" : "6";
        resultNodeNumber.textContent = keepBaseThreeSteps
          ? "3"
          : state.compactResult
          ? (factorySupplementEnabled ? "4" : "3")
          : (factorySupplementEnabled ? "7" : "6");
      }
      const movesToContract = ["passed", "noNeed", "delayed"].includes(status);
      updateOnboardingFlowProgress(movesToContract ? "contractPanel" : "factoryPanel", "factoryPanel");
      Object.entries(state.nodes).forEach(([key, value]) => setFactoryNodeMeta(key, value[0], value[1]));
      if (state.compactResult && factorySupplementEnabled) {
        setFactoryNodeMeta("supplement", "已补交", "后台要求补交资料已完成");
      }
      const arrangeMeta = status === "arrange"
        ? ["验厂中", "验厂中"]
        : ["needSupplement", "supplement", "passed", "gradeB", "failed"].includes(status)
          ? ["已完成", "验厂完成"]
          : ["待开始", "未开始"];
      setFactoryNodeMeta("arrange", arrangeMeta[0], arrangeMeta[1]);
      const applyEmpty = document.getElementById("factoryApplyEmptyBody");
      const applySubmitted = document.getElementById("factoryApplySubmittedBody");
      if (applyEmpty && applySubmitted) {
        const isApplyDraft = status === "apply";
        applyEmpty.style.display = isApplyDraft ? "" : "none";
        applySubmitted.style.display = isApplyDraft ? "none" : "grid";
      }
      const factoryMethodOptions = document.getElementById("factoryMethodOptions");
      if (factoryMethodOptions) factoryMethodOptions.style.display = ["pay", "paid", "voucherRejected", "arrange", "needSupplement", "supplement", "passed", "gradeB", "failed"].includes(status) ? "grid" : "none";
      const resultPendingBody = document.getElementById("factoryResultPendingBody");
      const resultScoreBody = document.getElementById("factoryResultScoreBody");
      const resultNoScoreBody = document.getElementById("factoryResultNoScoreBody");
      const resultFailedBody = document.getElementById("factoryResultFailedBody");
      if (resultPendingBody && resultScoreBody && resultNoScoreBody && resultFailedBody) {
        const showScore = status === "passed";
        const showNoScore = ["noNeed", "delayed"].includes(status);
        const showFailed = ["failed", "gradeB"].includes(status);
        resultScoreBody.style.display = showScore ? "grid" : "none";
        resultNoScoreBody.style.display = showNoScore ? "" : "none";
        resultFailedBody.style.display = showFailed ? "" : "none";
        resultPendingBody.style.display = showScore || showNoScore || showFailed ? "none" : "";
        const noScoreText = status === "delayed"
          ? "平台审核后确认可延后验厂，本次记录为验厂通过。延后验厂场景不展示验厂评级和工厂打分。"
          : "平台审核后判定当前供应商可暂不进行现场验厂，记录为验厂通过。该场景不展示验厂评级和工厂打分。";
        const noScoreSpan = resultNoScoreBody.querySelector("span");
        if (noScoreSpan) noScoreSpan.textContent = noScoreText;
        const failedSpan = resultFailedBody.querySelector("span");
        if (failedSpan) failedSpan.textContent = status === "gradeB"
          ? "验厂评级为 B，供应商需按整改意见完成整改后重新发起验厂申请。"
          : "验厂评级为 C/D，不符合平台准入条件，流程结束且不可进入协议签署。";
      }
      const applyButton = document.getElementById("submitFactoryApplyBtn");
      if (applyButton) {
        applyButton.classList.add("show");
        applyButton.textContent = status === "apply" ? "提交验厂申请" : "已提交申请";
        applyButton.disabled = status !== "apply";
      }
      document.getElementById("payFactoryFeeBtn")?.classList.toggle("show", status === "pay");
      document.getElementById("reuploadFactoryVoucherBtn")?.classList.toggle("show", status === "voucherRejected");
      document.getElementById("resubmitFactoryApplyBtn")?.classList.toggle("show", status === "gradeB");
      document.getElementById("submitFactorySupplementBtn")?.classList.toggle("show", status === "needSupplement");
      if (primary) primary.style.visibility = status === "supplement" ? "hidden" : "visible";
      document.querySelectorAll("[data-factory-status]").forEach(button => {
        button.classList.toggle("active", button.dataset.factoryStatus === status);
      });
      const toggleSupplementButton = document.getElementById("toggleFactorySupplementNodeBtn");
      if (toggleSupplementButton) toggleSupplementButton.textContent = factorySupplementEnabled ? "隐藏补交资料节点" : "显示补交资料节点";
    }
    const merchantSampleFlowStates = {
      apply: {
        active: "apply",
        next: "去试样提报",
        eta: "待提交",
        primaryText: "去试样提报",
        desc: "当前待提交试样申请，请进入商品中心完善商品资料并提交招商初审。",
        nodes: {
          apply: ["待提交", "待供应商提交"],
          audit: ["待开始", "未开始"],
          ship: ["待开始", "未开始"],
          review: ["待开始", "未开始"],
          pricing: ["待开始", "未开始"],
          quality: ["待开始", "未开始"],
          result: ["待开始", "未开始"]
        }
      },
      audit: {
        active: "audit",
        next: "招商初审",
        eta: "1-2 个工作日",
        primaryText: "撤销审核",
        desc: "试样申请已提交，招商正在审核商品基础资料与合作匹配度。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["待审核", "审核中"],
          ship: ["待开始", "未开始"],
          review: ["待开始", "未开始"],
          pricing: ["待开始", "未开始"],
          quality: ["待开始", "未开始"],
          result: ["待开始", "未开始"]
        }
      },
      ship: {
        active: "ship",
        next: "寄送样品",
        eta: "寄出后 1-2 个工作日签收",
        primaryText: "提交物流信息",
        desc: "招商初审已通过，供应商需寄送样品；招商确认收样后先审核样品是否合格。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          ship: ["待寄样", "待供应商寄出"],
          review: ["待开始", "未开始"],
          pricing: ["待开始", "未开始"],
          quality: ["待开始", "未开始"],
          result: ["待开始", "未开始"]
        }
      },
      review: {
        active: "review",
        next: "招商审核样品",
        eta: "预计 1 个工作日",
        primaryText: "查看审核状态",
        desc: "招商已确认收样，正在审核样品是否符合提报信息与平台选品要求。",
        nodes: {
          apply: ["已提交", "已提交"], audit: ["已通过", "审核通过"], ship: ["已寄样", "物流信息已提交"],
          review: ["审核中", "待反馈"], pricing: ["待开始", "未开始"], quality: ["待开始", "未开始"], result: ["待开始", "未开始"]
        }
      },
      reviewRejected: {
        active: "review",
        next: "重新寄送样品",
        eta: "待供应商处理",
        primaryText: "重新寄样",
        desc: "招商审核样品不合格，已驳回并通知供应商按反馈重新寄送样品。",
        nodes: {
          apply: ["已提交", "已提交"], audit: ["已通过", "审核通过"], ship: ["需重寄", "等待重新寄样"],
          review: ["不合格", "审核驳回"], pricing: ["待开始", "未开始"], quality: ["待开始", "未开始"], result: ["待开始", "未开始"]
        }
      },
      pricing: {
        active: "pricing",
        next: "样品核价",
        eta: "核价部处理中",
        primaryText: "查看核价进度",
        desc: "招商审核样品合格，已进入核价环节；核价部正在审核供货价、市场售价、促销价与成本信息。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          ship: ["已寄样", "物流信息已提交"],
          review: ["已通过", "样品合格"],
          pricing: ["核价中", "核价中"],
          quality: ["待开始", "未开始"],
          result: ["待反馈", "待反馈"]
        }
      },
      quality: {
        active: "quality",
        next: "样品检验",
        eta: "品控部处理中",
        primaryText: "查看检验进度",
        desc: "核价审核已通过，品控部正在检验样品品质、包装、规格与合规情况。",
        nodes: {
          apply: ["已提交", "已提交"], audit: ["已通过", "审核通过"], ship: ["已寄样", "物流信息已提交"], review: ["已通过", "样品合格"],
          pricing: ["已通过", "核价通过"], quality: ["检验中", "检验中"], result: ["待反馈", "待反馈"]
        }
      },
      failed: {
        active: "result",
        next: "修改后重新提报",
        eta: "待供应商处理",
        primaryText: "修改后重新提报",
        desc: "核价或品控审核未通过，供应商需查看反馈原因并修改后重新提报。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          ship: ["已寄样", "已提交物流"],
          review: ["已通过", "样品合格"],
          pricing: ["已完成", "已完成"],
          quality: ["已完成", "已完成"],
          result: ["不通过", "不通过"]
        }
      },
      passed: {
        active: "result",
        next: "完成入驻申请 / 商品申请上架",
        eta: "已完成",
        primaryText: "上新通过",
        desc: "核价审核与品控检验均已通过，可进入完成入驻流程或商品申请上架。",
        nodes: {
          apply: ["已提交", "已提交"],
          audit: ["已通过", "审核通过"],
          ship: ["已寄样", "已提交物流"],
          review: ["已通过", "样品合格"],
          pricing: ["已通过", "核价通过"],
          quality: ["已通过", "品控通过"],
          result: ["已通过", "已通过"]
        }
      }
    };
    const merchantSampleEmptyDetailHtml = `<div class="audit-box"><span>当前暂无商品详细资料，请点击「去试样提报」进入商品中心新增试样提报。</span><strong class="orange" data-node-result>待提交</strong></div>`;
    const merchantSampleProductDetailHtml = `
                <div class="sample-grid">
                  <div class="sample-box product-info-card">
                    <div><label>商品详细资料</label><strong>低温鲜果杯</strong><p style="color:var(--muted);font-size:12px;line-height:20px;margin-top:8px">规格：180g*6<br />类目：生鲜水果 / 轻食甜品<br />供货价：¥29.90<br />当前零售价：¥49.90<br />商品核心卖点：低温锁鲜、即食轻负担、适合办公室下午茶。<br />提报定位：首次入驻平台意向合作爆品，已提交商品基础资料、供货价、零售价和商品核心卖点。</p></div>
                    <div><label>商品图片</label><div class="product-photo-grid"><div class="product-photo">主图</div><div class="product-photo">包装图</div><div class="product-photo">细节图</div></div></div>
                  </div>
                </div>`;
    function renderMerchantSampleApplyDetail(status) {
      const body = document.getElementById("merchantSampleApplyBody");
      if (!body) return;
      body.innerHTML = status === "apply" ? merchantSampleEmptyDetailHtml : merchantSampleProductDetailHtml;
    }
    function updateMerchantSamplePrimaryAction(status, state) {
      const button = document.getElementById("merchantSamplePrimaryBtn");
      if (!button) return;
      button.textContent = state.primaryText || "去试样提报";
      button.dataset.samplePrimaryAction = status;
      button.classList.toggle("is-danger", status === "audit");
    }
    function setNodeMeta(nodeKey, statusText, resultText) {
      const node = document.querySelector(`[data-merchant-sample-node="${nodeKey}"]`);
      if (!node) return;
      const statusStrong = node.querySelector(".node-meta strong");
      const resultStrong = nodeKey === "apply" ? node.querySelector("[data-node-result]") : node.querySelector(".node-body .audit-box strong");
      if (statusStrong) {
        statusStrong.textContent = statusText;
        statusStrong.className = "";
        if (["已提交", "已通过", "已寄样", "已收样", "已评测"].includes(statusText)) statusStrong.classList.add("green");
        if (["待审核", "待寄样", "审核中", "评测中", "待反馈", "待提交", "需重寄"].includes(statusText)) statusStrong.classList.add("orange");
        if (["不通过", "不合格"].includes(statusText)) statusStrong.classList.add("red");
      }
      if (resultStrong) {
        resultStrong.textContent = resultText;
        resultStrong.className = statusStrong?.className || "";
      }
    }
    function updateMerchantSampleFlow(status = merchantSampleStatus) {
      merchantSampleStatus = status;
      const state = merchantSampleFlowStates[status] || merchantSampleFlowStates.audit;
      document.getElementById("summaryStage").textContent = "试样提报";
      document.getElementById("summaryNext").textContent = state.next;
      document.getElementById("summaryEta").textContent = state.eta;
      document.getElementById("summaryShopStatus").textContent = "未开通";
      document.getElementById("merchantSampleFlowDesc").textContent = state.desc;
      document.querySelectorAll("[data-sample-flow-node]").forEach(node => {
        const order = ["apply", "audit", "ship", "review", "pricing", "quality", "result"];
        const nodeIndex = order.indexOf(node.dataset.sampleFlowNode);
        const activeIndex = order.indexOf(state.active);
        const isComplete = status === "passed";
        node.classList.toggle("done", isComplete ? nodeIndex <= activeIndex : nodeIndex < activeIndex);
        node.classList.toggle("active", !isComplete && nodeIndex === activeIndex);
        node.classList.toggle("pending", nodeIndex > activeIndex);
      });
      renderMerchantSampleApplyDetail(status);
      Object.entries(state.nodes).forEach(([key, value]) => setNodeMeta(key, value[0], value[1]));
      updateMerchantSamplePrimaryAction(status, state);
      updateOnboardingFlowProgress(status === "passed" ? "factoryPanel" : "sampleFlowPanel", "sampleFlowPanel");
      document.getElementById("cancelSampleAuditBtn")?.classList.toggle("show", status === "audit");
      document.getElementById("submitShipLogisticsBtn")?.classList.toggle("show", status === "ship");
      document.getElementById("withdrawSampleApplyBtn")?.classList.toggle("show", status === "ship");
      document.getElementById("reshipRejectedSampleBtn")?.classList.toggle("show", status === "reviewRejected");
      document.getElementById("viewTestingProgressBtn")?.classList.toggle("show", status === "pricing");
      document.getElementById("viewQualityReviewBtn")?.classList.toggle("show", status === "quality");
      const failedReasonTip = document.getElementById("sampleFailedReasonTip");
      if (failedReasonTip) failedReasonTip.style.display = status === "failed" ? "block" : "none";
      const reviewRejectedTip = document.getElementById("sampleReviewRejectedTip");
      if (reviewRejectedTip) reviewRejectedTip.style.display = status === "reviewRejected" ? "block" : "none";
      document.getElementById("resubmitSampleBtn")?.classList.toggle("show", status === "failed");
      document.querySelectorAll(".status-actions [data-sample-status]").forEach(button => {
        button.classList.toggle("active", button.dataset.sampleStatus === status);
      });
    }
    function handleMerchantSamplePrimaryAction() {
      const status = merchantSampleStatus;
      if (status === "apply") {
        switchModule("product");
        showToast("已跳转至试样提报");
        return;
      }
      if (status === "audit") {
        updateMerchantSampleFlow("apply");
        showToast("已撤销审核，恢复为待提交");
        return;
      }
      if (status === "ship") {
        openModal("logisticsModal");
        return;
      }
      if (status === "reviewRejected") {
        updateMerchantSampleFlow("ship");
        showToast("已返回寄样节点，请重新提交物流信息");
        return;
      }
      if (status === "review") {
        showToast("招商正在审核样品，审核合格后进入样品核价");
        return;
      }
      const stageMap = { ship: "ship", pricing: "pricing", quality: "quality", failed: "failed", passed: "passed" };
      goSampleStage(stageMap[status] || "audit");
    }
    function switchDetailPanel(target, shouldScroll = true) {
      document.querySelectorAll(".detail-panel").forEach(panel => panel.classList.toggle("active", panel.id === target));
      updateOnboardingFlowProgress(target);
      updateFlowSummary(target);
      if (target === "sampleFlowPanel") updateMerchantSampleFlow();
      if (target === "factoryPanel") updateFactoryFlow();
      if (target === "depositPanel") updateDepositStatus(depositStatusState);
      if (shouldScroll) {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    let depositStatusState = "pending";
    function updateDepositStatus(status) {
      depositStatusState = status;
      const config = {
        pending: {
          stepOneText: "待缴纳",
          stepOneCls: "orange",
          stepTwoText: "待开始",
          stepTwoCls: "",
          financeResult: "待开始",
          next: "上传打款凭证",
          eta: "待平台财务确认",
          voucherStatus: "待上传",
          voucherTime: "待提交",
          voucherCls: "orange",
          financeTitle: "待开始",
          financeDesc: "供应商上传银行转账凭证后，平台财务开始核对到账信息。",
          uploadText: "上传打款凭证",
          uploadVisible: true,
          showFinanceResult: true,
          showConfirmCard: true
        },
        uploaded: {
          stepOneText: "已上传凭证",
          stepOneCls: "green",
          stepTwoText: "待审核",
          stepTwoCls: "orange",
          financeResult: "暂无",
          next: "待平台财务确认",
          eta: "1-3 个工作日",
          voucherStatus: "已上传凭证",
          voucherTime: "2026-07-09 17:20",
          voucherCls: "green",
          financeTitle: "待平台财务确认",
          financeDesc: "平台财务正在核对银行到账记录，确认后店铺可进入开通环节。",
          uploadText: "上传打款凭证",
          uploadVisible: false,
          showFinanceResult: true,
          showConfirmCard: true
        },
        approved: {
          stepOneText: "已上传凭证",
          stepOneCls: "green",
          stepTwoText: "审核通过",
          stepTwoCls: "green",
          financeResult: "审核通过",
          next: "店铺开通成功",
          eta: "暂无",
          voucherStatus: "已上传凭证",
          voucherTime: "2026-07-09 17:20",
          voucherCls: "green",
          financeTitle: "店铺开张成功",
          financeDesc: "平台财务已确认保证金到账，系统进入店铺开通环节。",
          uploadText: "上传打款凭证",
          uploadVisible: false,
          showFinanceResult: false,
          showConfirmCard: false
        },
        rejected: {
          stepOneText: "已上传凭证",
          stepOneCls: "green",
          stepTwoText: "审核不通过",
          stepTwoCls: "red",
          financeResult: "审核不通过",
          next: "重新打款并上传凭证",
          eta: "待供应商处理",
          voucherStatus: "已上传凭证",
          voucherTime: "2026-07-09 17:20",
          voucherCls: "green",
          financeTitle: "财务审核不通过",
          financeDesc: "财务审核不通过，请按原因重新打款并上传新的银行回单。",
          uploadText: "重新上传凭证",
          uploadVisible: true,
          showFinanceResult: true,
          showConfirmCard: false
        }
      }[status] || {};
      const statusText = document.getElementById("depositStatusText");
      if (statusText) {
        statusText.textContent = config.stepOneText;
        statusText.className = config.stepOneCls;
      }
      const voucherStatus = document.getElementById("depositVoucherStatus");
      if (voucherStatus) {
        voucherStatus.textContent = config.voucherStatus;
        voucherStatus.className = config.voucherCls;
      }
      const voucherTime = document.getElementById("depositVoucherTime");
      if (voucherTime) voucherTime.textContent = config.voucherTime;
      const voucherInfo = document.getElementById("depositVoucherInfo");
      if (voucherInfo) voucherInfo.style.display = status === "pending" ? "none" : "";
      const uploadBtn = document.getElementById("depositUploadBtn");
      if (uploadBtn) {
        uploadBtn.textContent = config.uploadText;
        uploadBtn.style.display = config.uploadVisible ? "" : "none";
      }
      const financeStatus = document.getElementById("depositFinanceStatus");
      if (financeStatus) {
        financeStatus.textContent = config.stepTwoText;
        financeStatus.className = config.stepTwoCls;
      }
      const financeResult = document.getElementById("depositFinanceResult");
      if (financeResult) {
        financeResult.textContent = config.financeResult;
        financeResult.className = config.stepTwoCls;
      }
      const financeResultMeta = document.getElementById("depositFinanceResultMeta");
      if (financeResultMeta) financeResultMeta.style.display = config.showFinanceResult ? "" : "none";
      const confirmCard = document.getElementById("depositConfirmCard");
      if (confirmCard) confirmCard.style.display = config.showConfirmCard ? "" : "none";
      const financePending = document.getElementById("depositFinancePending");
      if (financePending) {
        financePending.querySelector("span").textContent = config.financeDesc;
        financePending.querySelector("strong").textContent = config.financeTitle;
        financePending.querySelector("strong").className = config.stepTwoCls;
      }
      document.getElementById("depositRejectReason").style.display = status === "rejected" ? "" : "none";
      document.getElementById("depositModalStatus").textContent = status === "rejected" ? "财务审核不通过，待重新上传" : status === "pending" ? "待缴纳" : "已缴纳，待平台财务确认";
      document.getElementById("summaryStage").textContent = "缴纳保证金";
      document.getElementById("summaryNext").textContent = config.next;
      document.getElementById("summaryEta").textContent = config.eta;
      const summaryShopStatus = document.getElementById("summaryShopStatus");
      if (summaryShopStatus) {
        summaryShopStatus.textContent = status === "approved" ? "已开通" : "未开通";
        summaryShopStatus.className = status === "approved" ? "green" : "orange";
      }
      const depositFlowStep = document.querySelector('.flow-step[data-panel-target="depositPanel"]');
      if (depositFlowStep) {
        const isApproved = status === "approved";
        depositFlowStep.classList.toggle("done", isApproved);
        depositFlowStep.classList.toggle("current", !isApproved);
        const depositFlowButton = depositFlowStep.querySelector("button");
        if (depositFlowButton) depositFlowButton.textContent = isApproved ? "已缴纳" : "缴纳保证金";
      }
      document.querySelectorAll("[data-deposit-status]").forEach(button => {
        button.classList.toggle("active", button.dataset.depositStatus === status);
      });
    }
    function simulateContractSigned() {
      const contractPanel = document.getElementById("contractPanel");
      const status = contractPanel?.querySelector(".node-meta strong");
      const agreement = contractPanel?.querySelector(".filled-item strong");
      if (status) {
        status.textContent = "已签署";
        status.className = "green";
      }
      if (agreement) agreement.textContent = "已签署";
      const flowAction = document.getElementById("contractFlowActionBtn");
      if (flowAction) flowAction.textContent = "已签署";
      const detailAction = document.getElementById("contractDetailActionBtn");
      if (detailAction) {
        detailAction.textContent = "已签署-下载协议";
        detailAction.dataset.toast = "已下载签署后的入驻协议";
      }
      const detailGrid = document.getElementById("contractDetailGrid");
      if (detailGrid) {
        detailGrid.innerHTML = `
          <div class="filled-item wide"><label>合作协议</label><strong class="green">已签署</strong><p>含供货、履约、售后、结算和商品上架约定。协议签署完成后不可直接撤回，如需变更需联系平台招商/商管重新发起协议版本。</p></div>
          <div class="filled-item"><label>协议版本</label><strong>V2026.07</strong><p>当前生效版本。</p></div>
          <div class="filled-item"><label>签署主体</label><strong>上海示例科技有限公司</strong><p>法人：张三</p></div>
          <div class="filled-item"><label>签署时间</label><strong>2026-07-09 16:30</strong><p>短信验证码确认签署。</p></div>
          <div class="filled-item"><label>协议生效时间</label><strong>2026-07-09 16:30</strong><p>签署完成后即时生效。</p></div>
        `;
      }
      showToast("协议已签署，进入缴纳保证金流程");
      switchDetailPanel("depositPanel");
      updateDepositStatus("pending");
    }
    function renderSampleList() {
      const tbody = document.getElementById("sampleTableBody");
      const empty = document.getElementById("sampleEmptyState");
      if (!tbody || !empty) return;
      const rows = sampleListState.hasData
        ? sampleRows.filter(row => sampleListState.tab === "all" || row.tab === sampleListState.tab)
        : [];
      tbody.innerHTML = rows.map(row => `
        <tr data-sample-status="${row.statusKey}">
          <td><div class="sample-name"><div class="sample-thumb">商品图</div><strong>${row.product}</strong></div></td>
          <td><div class="sample-cell-lines">${row.spec}</div></td>
          <td><div class="sample-cell-lines">${row.sales}</div></td>
          <td><div class="sample-cell-lines">${row.price}</div></td>
          <td>${row.channel}</td>
          <td>${row.returnBack}</td>
          <td><span class="${getSampleStatusClass(row)}">${getSampleListStatus(row)}</span></td>
          <td>${row.source}</td>
          <td>${row.time}</td>
          <td>
            <div class="sample-actions">
              <button class="text-btn" type="button" data-sample-status="${row.statusKey}">详情</button>
              <button class="text-btn" type="button" data-product-comment="${row.product}">试样反馈</button>
              ${row.canDelete ? `<button class="text-btn" style="color:var(--danger)" type="button" data-delete-sample="${row.id}">删除</button>` : ""}
            </div>
          </td>
        </tr>`).join("");
      empty.style.display = rows.length ? "none" : "grid";
      document.getElementById("samplePageCount").textContent = `共 ${rows.length} 条`;
      document.getElementById("toggleSampleDataBtn").textContent = sampleListState.hasData ? "切换无数据状态" : "切换有数据状态";
      tbody.querySelectorAll("[data-sample-status]").forEach(node => {
        node.addEventListener("click", event => {
          event.stopPropagation();
          openSampleDetail(node.dataset.sampleStatus);
        });
      });
      tbody.querySelectorAll("[data-product-comment]").forEach(node => {
        node.addEventListener("click", event => {
          event.stopPropagation();
          openProductCommentDrawer(node.dataset.productComment);
        });
      });
      tbody.querySelectorAll("[data-delete-sample]").forEach(node => {
        node.addEventListener("click", event => {
          event.stopPropagation();
          const index = sampleRows.findIndex(row => row.id === Number(node.dataset.deleteSample));
          if (index >= 0) {
            const deletedName = sampleRows[index].product;
            sampleRows.splice(index, 1);
            renderSampleList();
            showToast(`${deletedName} 已删除`);
          }
        });
      });
    }
    function openProductCommentDrawer(productName) {
      document.getElementById("productCommentProductName").textContent = productName || "黛莱美测试商品";
      document.getElementById("commentDrawerMask").classList.add("show");
      document.getElementById("commentDrawer").classList.add("open");
    }
    function closeProductCommentDrawer() {
      document.getElementById("commentDrawerMask").classList.remove("show");
      document.getElementById("commentDrawer").classList.remove("open");
    }
    function revokeSampleToDraft() {
      sampleRows[0].status = "草稿";
      sampleRows[0].statusKey = "apply";
      sampleRows[0].canDelete = true;
      sampleRows[0].time = "2026-07-06 11:20:00";
      sampleListState.hasData = true;
      renderSampleList();
      showToast("已撤回提报样品，商品恢复为草稿状态");
      goSampleStage("apply");
    }
    function updateSampleStageStepper(stage) {
      const activeOrder = stageOrder[stage] || 1;
      document.querySelectorAll(".process-step[data-sample-stage]").forEach(step => {
        const order = stageOrder[step.dataset.sampleStage] || 1;
        const isActive = stage === "failed" ? step.dataset.sampleStage === "quality" : order === activeOrder;
        step.classList.toggle("active", isActive);
        step.classList.toggle("done", order < activeOrder);
      });
      document.querySelectorAll(".process-stepper").forEach(stepper => {
        const parts = Array.from(stepper.children);
        parts.forEach((part, index) => {
          if (!part.classList?.contains("process-line")) return;
          const prevStep = parts[index - 1];
          const nextStep = parts[index + 1];
          const prevOrder = stageOrder[prevStep?.dataset?.sampleStage] || 0;
          const nextOrder = stageOrder[nextStep?.dataset?.sampleStage] || 0;
          part.classList.toggle("done", prevOrder < activeOrder && nextOrder <= activeOrder);
        });
      });
    }
    function renderPassedVariant(mode = samplePassedMode) {
      samplePassedMode = mode;
      const variant = samplePassedVariants[mode] || samplePassedVariants.onboarding;
      document.getElementById("sampleStageNext").textContent = variant.next;
      document.getElementById("passedFlowTitle").textContent = variant.flow;
      document.getElementById("passedFlowDesc").textContent = variant.flowDesc;
      document.getElementById("passedNoticeTitle").textContent = variant.title;
      document.getElementById("passedNoticeDesc").textContent = variant.desc;
      const primaryAction = document.getElementById("passedPrimaryAction");
      if (primaryAction) {
        primaryAction.textContent = variant.button;
        primaryAction.dataset.toast = variant.toast;
      }
      document.querySelectorAll("[data-passed-mode]").forEach(button => {
        button.classList.toggle("active", button.dataset.passedMode === mode);
      });
    }
    function goSampleStage(stage) {
      if (stage === "apply") {
        switchModule("sample-apply");
        updateSampleStageStepper("apply");
      } else if (stage === "audit") {
        switchModule("sample-platform");
        updateSampleStageStepper("audit");
      } else {
        const data = sampleStageMap[stage] || sampleStageMap.ship;
        document.getElementById("sampleStagePageTitle").textContent = "商品详情";
        document.getElementById("sampleStageStatus").textContent = data.status;
        document.getElementById("sampleStageOwner").textContent = data.owner;
        document.getElementById("sampleStageTime").textContent = data.time;
        document.getElementById("sampleStageNext").textContent = data.next;
        document.getElementById("sampleStageSectionTitle").textContent = data.section;
        document.getElementById("sampleStageBody").innerHTML = data.body;
        document.getElementById("sampleStageFooter").innerHTML = data.footer;
        document.getElementById("sampleStageReturnBack").textContent = data.returnBack || "不寄回";
        const returnInfo = document.getElementById("sampleStageReturnInfo");
        if (returnInfo) {
          returnInfo.innerHTML = data.returnInfo || "";
          returnInfo.style.display = data.returnInfo ? "block" : "none";
        }
        if (stage === "passed") {
          renderPassedVariant(samplePassedMode);
          document.querySelectorAll("[data-passed-mode]").forEach(node => {
            node.addEventListener("click", () => renderPassedVariant(node.dataset.passedMode));
          });
        }
        document.getElementById("sampleStageFooter").querySelectorAll("[data-page-link]").forEach(node => {
          node.addEventListener("click", event => {
            event.stopPropagation();
            switchModule(node.dataset.pageLink);
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        });
        document.getElementById("sampleStageFooter").querySelectorAll("[data-toast]").forEach(node => {
          node.addEventListener("click", () => showToast(node.dataset.toast));
        });
        document.getElementById("openLogisticsModalBtn")?.addEventListener("click", () => openModal("logisticsModal"));
        document.getElementById("sampleStageFooter").querySelectorAll("[data-jump-stage]").forEach(node => {
          node.addEventListener("click", () => {
            const jumpMessageMap = {
              pricing: "招商已确认收样，进入样品核价",
              quality: "核价通过，进入品控检验",
              failed: "已切换至不通过节点",
              apply: "已返回商品信息，可修改后重新提报"
            };
            showToast(jumpMessageMap[node.dataset.jumpStage] || "状态已切换");
            goSampleStage(node.dataset.jumpStage);
          });
        });
        document.getElementById("sampleStageFooter").querySelectorAll("[data-revoke-sample]").forEach(node => {
          node.addEventListener("click", revokeSampleToDraft);
        });
        switchModule("sample-stage");
        updateSampleStageStepper(stage);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function openSampleDetail(status) {
      if (status === "audit") {
        goSampleStage("audit");
        return;
      }
      if (["ship", "pricing", "quality", "failed", "passed"].includes(status)) {
        goSampleStage(status);
        return;
      }
      const data = sampleStatusMap[status];
      document.getElementById("sampleDetailTitle").textContent = data[0];
      document.getElementById("sampleDetailStatus").textContent = data[1];
      document.getElementById("sampleDetailTime").textContent = data[2];
      document.getElementById("sampleDetailOwner").textContent = data[3];
      document.getElementById("sampleDetailDesc").textContent = data[4];
      document.getElementById("sampleDetailNext").textContent = data[5];
      switchModule("sample-detail");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const addressState = {
      activeType: "afterSale",
      editingGroup: null,
      editingId: null,
      deleteGroup: null,
      deleteTarget: null,
      forceEmpty: { afterSale: true, sampleReturn: true },
      afterSale: [
        {
          id: 1,
          receiver: "启盛仓储",
          phone: "13226242965",
          region: "广东省 广州市 花都区",
          detail: "花东镇镇佳物流南溪园区（启盛云仓）",
          createdAt: "2025-12-15 15:28:27",
          isDefault: true
        }
      ],
      supplierReturn: [
        {
          id: 3,
          receiver: "启盛仓储",
          phone: "13226242965",
          region: "广州市 花都区",
          detail: "花东镇镇佳物流南溪园区（启盛云仓）",
          createdAt: "2025-12-15 15:28:27",
          isDefault: true
        }
      ],
      sampleReturn: []
    };
    const addressTypeName = { afterSale: "售后地址", sampleReturn: "试样退货地址" };
    const addressSectionName = { afterSale: "发货联络信息", sampleReturn: "试样退货地址" };
    const demoAddress = {
      afterSale: {
        id: 1,
        receiver: "启盛仓储",
        phone: "13226242965",
        region: "广东省 广州市 花都区",
        detail: "花东镇镇佳物流南溪园区（启盛云仓）",
        createdAt: "2025-12-15 15:28:27",
        isDefault: true
      },
      sampleReturn: {
        id: 2,
        receiver: "启盛仓储",
        phone: "13226242965",
        region: "广州市 花都区",
        detail: "花东镇镇佳物流南溪园区（启盛云仓）",
        createdAt: "2025-12-15 15:28:27",
        isDefault: false
      },
      supplierReturn: {
        id: 3,
        receiver: "启盛仓储",
        phone: "13226242965",
        region: "广州市 花都区",
        detail: "花东镇镇佳物流南溪园区（启盛云仓）",
        createdAt: "2025-12-15 15:28:27",
        isDefault: true
      }
    };
    function openModal(id) {
      document.getElementById(id)?.classList.add("show");
    }
    function closeModal(id) {
      document.getElementById(id)?.classList.remove("show");
    }
    function currentAddressList(group) {
      return addressState[group || addressState.activeType];
    }
    function renderAddressList() {
      const content = document.getElementById("addressContent");
      if (!content) return;
      const list = currentAddressList();
      const visibleList = addressState.forceEmpty[addressState.activeType] ? [] : list;
      const supplierReturnList = addressState.forceEmpty.afterSale ? [] : addressState.supplierReturn;
      const hasVisibleAddress = addressState.activeType === "afterSale" ? visibleList.length || supplierReturnList.length : visibleList.length;
      document.getElementById("toggleAddressDataBtn").textContent = hasVisibleAddress ? "切换暂无地址" : "切换有数据状态";
      if (!hasVisibleAddress) {
        content.innerHTML = `
          <div class="empty-state" style="min-height:300px">
            <div>
              <div class="empty-illustration"></div>
              <strong>暂无数据</strong>
            </div>
          </div>`;
        content.querySelector("[data-address-action='add']")?.addEventListener("click", () => openAddressForm());
        return;
      }
      const renderTable = (rows, title, protectedType) => `
        <div class="address-card">
        <h3>${title}</h3>
        <table class="table address-table">
          <colgroup>
            <col style="width:58px" />
            <col style="width:42%" />
            <col style="width:120px" />
            <col style="width:140px" />
            <col style="width:170px" />
            <col style="width:220px" />
          </colgroup>
          <thead><tr><th>序号</th><th>地址</th><th>联系人</th><th>手机号码</th><th>创建时间</th><th>操作</th></tr></thead>
          <tbody>
            ${rows.map((item, index) => {
              const protectDefault = item.isDefault || (protectedType === "afterSale" && rows.length <= 1);
              return `
              <tr>
                <td>${index + 1}</td>
                <td>${item.region}${item.detail}</td>
                <td>${item.receiver}</td>
                <td>${item.phone}</td>
                <td>${item.createdAt || "2026-07-03 10:00:00"}</td>
                <td>
                  ${item.isDefault && protectedType !== "sampleReturn" ? '<span class="default-tag">默认地址</span>' : ''}
                  <button class="text-btn" type="button" data-address-action="edit" data-address-group="${protectedType}" data-address-id="${item.id}">修改</button>
                  <button class="text-btn" type="button" data-address-action="delete" data-address-group="${protectedType}" data-address-id="${item.id}" ${protectDefault ? "disabled" : ""} style="color:var(--danger)">删除</button>
                </td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
        </div>`;
      content.innerHTML = addressState.activeType === "afterSale"
        ? `${renderTable(visibleList, "发货联络信息", "afterSale")}${renderTable(supplierReturnList, "供应商退货地址", "supplierReturn")}`
        : renderTable(visibleList, "试样退货地址", "sampleReturn");
      content.querySelectorAll("[data-address-action='edit']").forEach(button => {
        button.addEventListener("click", () => openAddressForm(Number(button.dataset.addressId), button.dataset.addressGroup));
      });
      content.querySelectorAll("[data-address-action='delete']").forEach(button => {
        button.addEventListener("click", () => {
          if (button.disabled) {
            showToast("默认地址不可删除");
            return;
          }
          addressState.deleteGroup = button.dataset.addressGroup;
          addressState.deleteTarget = Number(button.dataset.addressId);
          openModal("deleteAddressModal");
        });
      });
    }
    function setAddressTab(type) {
      addressState.activeType = type;
      document.querySelectorAll("[data-address-tab]").forEach(tab => tab.classList.toggle("active", tab.dataset.addressTab === type));
      document.getElementById("addressListView").classList.add("active");
      document.getElementById("addressFormView").classList.remove("active");
      renderAddressList();
    }
    function openAddressForm(id, group) {
      addressState.editingGroup = group || addressState.activeType;
      addressState.editingId = id || null;
      const item = id ? currentAddressList(addressState.editingGroup).find(row => row.id === id) : null;
      const formName = addressState.editingGroup === "supplierReturn" ? "供应商退货地址" : addressTypeName[addressState.activeType];
      document.getElementById("addressFormTitle").textContent = `${id ? "编辑" : "新增"}${formName}`;
      document.getElementById("addressReceiver").value = item?.receiver || "";
      document.getElementById("addressPhone").value = item?.phone || "";
      document.getElementById("addressRegion").value = item?.region || "";
      document.getElementById("addressDetail").value = item?.detail || "";
      document.getElementById("addressDefault").checked = item?.isDefault || !currentAddressList(addressState.editingGroup).length;
      document.getElementById("addressDefaultField").style.display = addressState.editingGroup === "sampleReturn" ? "none" : "block";
      document.getElementById("addressListView").classList.remove("active");
      document.getElementById("addressFormView").classList.add("active");
    }
    function saveAddress() {
      const data = {
        id: addressState.editingId || Date.now(),
        receiver: document.getElementById("addressReceiver").value.trim() || "张三",
        phone: document.getElementById("addressPhone").value.trim() || "138****8000",
        region: document.getElementById("addressRegion").value.trim() || "广东省 广州市 天河区",
        detail: document.getElementById("addressDetail").value.trim() || "珠江新城示例路 88 号",
        createdAt: "2026-07-03 10:00:00",
        isDefault: addressState.editingGroup === "sampleReturn" ? false : document.getElementById("addressDefault").checked
      };
      const list = currentAddressList(addressState.editingGroup);
      if (data.isDefault) list.forEach(item => item.isDefault = false);
      if (addressState.editingId) {
        const index = list.findIndex(item => item.id === addressState.editingId);
        list.splice(index, 1, data);
      } else {
        list.push(data);
      }
      addressState.forceEmpty[addressState.activeType] = false;
      document.getElementById("addressListView").classList.add("active");
      document.getElementById("addressFormView").classList.remove("active");
      renderAddressList();
      showToast("保存成功");
    }
    function deleteAddress() {
      const list = currentAddressList();
      const group = addressState.deleteGroup || addressState.activeType;
      const deleteList = currentAddressList(group);
      const index = deleteList.findIndex(item => item.id === addressState.deleteTarget);
      if (deleteList[index]?.isDefault || (group === "afterSale" && deleteList.length <= 1)) {
        closeModal("deleteAddressModal");
        showToast(deleteList[index]?.isDefault ? "默认地址不可删除" : "售后地址至少保留一条");
        return;
      }
      if (index >= 0) deleteList.splice(index, 1);
      closeModal("deleteAddressModal");
      renderAddressList();
      showToast("删除成功");
    }
    document.querySelectorAll("[data-module]").forEach(node => node.addEventListener("click", () => switchModule(node.dataset.module, node)));
    document.querySelectorAll("[data-sample-tab]").forEach(tab => {
      tab.addEventListener("click", () => {
        sampleListState.tab = tab.dataset.sampleTab;
        document.querySelectorAll("[data-sample-tab]").forEach(item => item.classList.toggle("active", item === tab));
        renderSampleList();
      });
    });
    document.getElementById("toggleSampleDataBtn")?.addEventListener("click", () => {
      sampleListState.hasData = !sampleListState.hasData;
      renderSampleList();
      showToast(sampleListState.hasData ? "已切换为有数据状态" : "已切换为无数据状态");
    });
    document.querySelectorAll("[data-address-tab]").forEach(tab => tab.addEventListener("click", () => setAddressTab(tab.dataset.addressTab)));
    document.getElementById("addAddressTopBtn")?.addEventListener("click", () => openAddressForm());
    document.getElementById("toggleAddressDataBtn")?.addEventListener("click", () => {
      const type = addressState.activeType;
      if (addressState.forceEmpty[type]) {
        if (!addressState[type].length) addressState[type].push({ ...demoAddress[type], id: Date.now() });
        if (type === "afterSale" && !addressState.supplierReturn.length) addressState.supplierReturn.push({ ...demoAddress.supplierReturn, id: Date.now() + 1 });
        addressState.forceEmpty[type] = false;
      } else {
        addressState.forceEmpty[type] = true;
      }
      renderAddressList();
      showToast(addressState.forceEmpty[type] ? "已切换为暂无地址" : "已切换为有数据状态");
    });
    document.getElementById("cancelAddressFormBtn")?.addEventListener("click", () => {
      document.getElementById("addressListView").classList.add("active");
      document.getElementById("addressFormView").classList.remove("active");
    });
    document.getElementById("saveAddressBtn")?.addEventListener("click", saveAddress);
    document.getElementById("confirmDeleteAddressBtn")?.addEventListener("click", deleteAddress);
    document.getElementById("confirmLogisticsBtn")?.addEventListener("click", () => {
      const company = document.getElementById("logisticsCompany").value.trim() || "顺丰速运";
      const no = document.getElementById("logisticsNo").value.trim() || "SF1234567890";
      const sender = document.getElementById("senderName").value.trim() || "张三";
      const phone = document.getElementById("senderPhone").value.trim() || "138****8000";
      closeModal("logisticsModal");
      showToast(`物流信息已提交：${company} ${no}`);
      switchModule("merchant");
      switchDetailPanel("sampleFlowPanel", false);
      updateMerchantSampleFlow("review");
      showToast("寄样信息已提交，等待招商收样审核");
      document.getElementById("logisticsCompany").value = company;
      document.getElementById("logisticsNo").value = no;
      document.getElementById("senderName").value = sender;
      document.getElementById("senderPhone").value = phone;
    });
    document.querySelectorAll("[data-close-modal]").forEach(node => node.addEventListener("click", () => closeModal(node.dataset.closeModal)));
    let depositModalSource = "onboarding";
    document.getElementById("simulateContractSignedBtn")?.addEventListener("click", simulateContractSigned);
    document.getElementById("depositUploadBtn")?.addEventListener("click", () => {
      depositModalSource = "onboarding";
      document.getElementById("depositModalStatus").textContent = document.getElementById("depositStatusText").textContent;
      document.getElementById("depositBusinessType").value = "合作保证金补缴";
      document.getElementById("depositDueAmount").value = "¥20,000.00";
      openModal("depositVoucherModal");
    });
    document.getElementById("openDepositSupplementBtn")?.addEventListener("click", () => {
      depositModalSource = "finance";
      document.getElementById("depositModalStatus").textContent = "待缴纳";
      document.getElementById("depositBusinessType").value = "合作保证金补缴";
      document.getElementById("depositDueAmount").value = "¥317.93";
      document.getElementById("depositPaidAmount").value = "";
      openModal("depositVoucherModal");
    });
    document.getElementById("showDepositAccountDetail")?.addEventListener("click", () => {
      document.getElementById("depositManageList").style.display = "none";
      document.getElementById("depositAccountDetail").classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("backDepositList")?.addEventListener("click", () => {
      document.getElementById("depositManageList").style.display = "";
      document.getElementById("depositAccountDetail").classList.remove("active");
    });
    document.querySelectorAll("[data-deposit-detail-tab]").forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelectorAll("[data-deposit-detail-tab]").forEach(item => item.classList.toggle("active", item === tab));
        document.querySelectorAll("[data-deposit-detail-panel]").forEach(panel => panel.classList.toggle("active", panel.dataset.depositDetailPanel === tab.dataset.depositDetailTab));
      });
    });
    document.getElementById("confirmDepositVoucher")?.addEventListener("click", () => {
      closeModal("depositVoucherModal");
      if (depositModalSource === "onboarding") updateDepositStatus("uploaded");
      showToast("打款凭证已提交，等待平台财务确认");
    });
    document.querySelectorAll("[data-deposit-status]").forEach(node => {
      node.addEventListener("click", () => {
        updateDepositStatus(node.dataset.depositStatus);
        const messageMap = {
          pending: "已切换为待缴纳",
          uploaded: "已切换为已上传凭证，等待财务审核",
          approved: "已切换为财务审核通过",
          rejected: "已切换为财务审核不通过"
        };
        const message = messageMap[node.dataset.depositStatus] || "保证金状态已切换";
        showToast(message);
      });
    });
    document.getElementById("newSampleBtn")?.addEventListener("click", () => {
      if (addressState.sampleReturn.length && !addressState.forceEmpty.sampleReturn) {
        switchModule("sample-apply");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        openModal("sampleAddressModal");
      }
    });
    document.getElementById("goSampleAddressBtn")?.addEventListener("click", () => {
      closeModal("sampleAddressModal");
      switchModule("merchant-address");
      setAddressTab("sampleReturn");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("submitSampleApplyBtn")?.addEventListener("click", () => {
      sampleRows[0].status = "待处理";
      sampleRows[0].statusKey = "audit";
      sampleRows[0].canDelete = false;
      sampleRows[0].time = "2026-07-06 11:05:16";
      sampleListState.hasData = true;
      renderSampleList();
      showToast("试样提报已提交，等待招商初审");
      goSampleStage("audit");
    });
    document.getElementById("revokeSampleAuditBtn")?.addEventListener("click", () => {
      revokeSampleToDraft();
    });
    document.getElementById("cancelSampleAuditBtn")?.addEventListener("click", () => {
      updateMerchantSampleFlow("apply");
      showToast("已撤销审核，恢复为待提交");
    });
    document.getElementById("submitShipLogisticsBtn")?.addEventListener("click", () => {
      openModal("logisticsModal");
    });
    document.getElementById("withdrawSampleApplyBtn")?.addEventListener("click", () => {
      updateMerchantSampleFlow("apply");
      showToast("试样申请已撤回，恢复为待提交");
    });
    document.getElementById("viewTestingProgressBtn")?.addEventListener("click", () => {
      goSampleStage("pricing");
    });
    document.getElementById("viewQualityReviewBtn")?.addEventListener("click", () => {
      goSampleStage("quality");
    });
    document.getElementById("resubmitSampleBtn")?.addEventListener("click", () => {
      goSampleStage("apply");
      showToast("已返回商品信息，可修改后重新提报");
    });
    document.querySelectorAll("[data-jump-module]").forEach(node => {
      node.addEventListener("click", event => {
        event.stopPropagation();
        if (node.id === "merchantSamplePrimaryBtn") {
          handleMerchantSamplePrimaryAction();
          return;
        }
        switchModule(node.dataset.jumpModule);
        showToast("已跳转至试样提报");
      });
    });
    document.querySelectorAll("[data-page-link]").forEach(node => {
      node.addEventListener("click", event => {
        event.stopPropagation();
        switchModule(node.dataset.pageLink);
        if (node.dataset.panelTarget) switchDetailPanel(node.dataset.panelTarget, false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
    document.querySelectorAll("[data-panel-target]").forEach(node => {
      node.addEventListener("click", event => {
        event.stopPropagation();
        switchDetailPanel(node.dataset.panelTarget);
      });
    });
    document.querySelectorAll("[data-review-tab]").forEach(node => {
      node.addEventListener("click", () => {
        document.querySelectorAll("[data-review-tab]").forEach(tab => tab.classList.toggle("active", tab === node));
        document.querySelectorAll(".review-tab-panel").forEach(panel => panel.classList.toggle("active", panel.id === node.dataset.reviewTab));
      });
    });
    document.querySelectorAll("[data-merchant-profile-tab]").forEach(node => {
      node.addEventListener("click", () => {
        document.querySelectorAll("[data-merchant-profile-tab]").forEach(tab => tab.classList.toggle("active", tab === node));
        document.querySelectorAll("[data-merchant-profile-panel]").forEach(panel => {
          panel.classList.toggle("active", panel.dataset.merchantProfilePanel === node.dataset.merchantProfileTab);
        });
      });
    });
    document.querySelectorAll("[data-merchant-cert-tab]").forEach(node => {
      node.addEventListener("click", () => {
        document.querySelectorAll("[data-merchant-cert-tab]").forEach(tab => tab.classList.toggle("active", tab === node));
        document.querySelectorAll("[data-merchant-cert-panel]").forEach(panel => {
          panel.classList.toggle("active", panel.dataset.merchantCertPanel === node.dataset.merchantCertTab);
        });
      });
    });
    document.querySelectorAll("[data-finance-flow-detail]").forEach(node => {
      node.addEventListener("click", () => {
        const cells = node.closest("tr").querySelectorAll("td");
        const type = cells[1].textContent.trim();
        const increase = cells[3].textContent.trim();
        const decrease = cells[4].textContent.trim();
        document.getElementById("flowDetailSerial").textContent = cells[8].textContent.trim() === "-" ? "15341" : cells[8].textContent.trim();
        document.getElementById("flowDetailType").textContent = type;
        document.getElementById("flowDetailPrevious").textContent = `¥${cells[2].textContent.trim()}`;
        document.getElementById("flowDetailIncrease").textContent = `¥${increase}`;
        document.getElementById("flowDetailDecrease").textContent = `¥${decrease}`;
        document.getElementById("flowDetailBalance").textContent = `¥${cells[5].textContent.trim()}`;
        document.getElementById("flowDetailBusiness").textContent = cells[6].textContent.trim();
        document.getElementById("flowDetailPaid").textContent = type === "缴款" ? `¥${increase}` : `¥${decrease}`;
        document.getElementById("flowDetailOperator").textContent = cells[7].textContent.trim();
        document.getElementById("flowDetailTime").textContent = cells[0].textContent.trim();
        document.getElementById("financeFlowListView").classList.remove("active");
        document.getElementById("financeFlowDetailView").classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
    document.getElementById("backFinanceFlowList")?.addEventListener("click", () => {
      document.getElementById("financeFlowDetailView").classList.remove("active");
      document.getElementById("financeFlowListView").classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("reshipRejectedSampleBtn")?.addEventListener("click", event => {
      event.stopPropagation();
      updateMerchantSampleFlow("ship");
      showToast("已返回寄样节点，请重新提交物流信息");
    });
    document.querySelectorAll("[data-sample-status]").forEach(node => {
      node.addEventListener("click", event => {
        event.stopPropagation();
        if (node.closest("#sampleFlowPanel")) {
          updateMerchantSampleFlow(node.dataset.sampleStatus);
          showToast("试样提报状态已切换");
          return;
        }
        openSampleDetail(node.dataset.sampleStatus);
      });
    });
    document.querySelectorAll("[data-factory-status]").forEach(node => {
      node.addEventListener("click", event => {
        event.stopPropagation();
        if (["needSupplement", "supplement"].includes(node.dataset.factoryStatus)) factorySupplementEnabled = true;
        updateFactoryFlow(node.dataset.factoryStatus);
        showToast("验厂状态已切换");
      });
    });
    document.getElementById("toggleFactorySupplementNodeBtn")?.addEventListener("click", event => {
      event.stopPropagation();
      factorySupplementEnabled = !factorySupplementEnabled;
      updateFactoryFlow(factoryStatus);
      showToast(factorySupplementEnabled ? "已显示补交资料节点" : "已隐藏补交资料节点");
    });
    document.getElementById("submitFactoryApplyBtn")?.addEventListener("click", () => {
      openModal("factoryApplyModal");
    });
    document.getElementById("confirmFactoryApply")?.addEventListener("click", () => {
      closeModal("factoryApplyModal");
      updateFactoryFlow("audit");
      showToast("验厂申请已提交");
    });
    document.getElementById("payFactoryFeeBtn")?.addEventListener("click", () => {
      openModal("factoryPaymentModal");
    });
    document.getElementById("reuploadFactoryVoucherBtn")?.addEventListener("click", () => {
      openModal("factoryPaymentModal");
    });
    document.getElementById("resubmitFactoryApplyBtn")?.addEventListener("click", () => {
      updateFactoryFlow("apply");
      openModal("factoryApplyModal");
      showToast("请修改验厂申请后重新提交");
    });
    document.getElementById("confirmFactoryPayment")?.addEventListener("click", () => {
      closeModal("factoryPaymentModal");
      updateFactoryFlow("paid");
      showToast("打款凭证已提交，等待平台审核");
    });
    function openFactorySupplementModal() {
      factorySupplementEnabled = true;
      if (!["needSupplement", "supplement"].includes(factoryStatus)) updateFactoryFlow("needSupplement");
      else updateFactoryFlow(factoryStatus);
      openModal("factorySupplementModal");
    }
    document.getElementById("submitFactorySupplementBtn")?.addEventListener("click", openFactorySupplementModal);
    document.getElementById("factoryRecordSupplementBtn")?.addEventListener("click", event => {
      event.stopPropagation();
      switchModule("merchant");
      switchDetailPanel("factoryPanel", false);
      updateFactoryFlow("needSupplement");
      openModal("factorySupplementModal");
    });
    document.getElementById("factoryPrimaryBtn")?.addEventListener("click", () => {
      if (factoryStatus === "pay") openModal("factoryPaymentModal");
      if (factoryStatus === "voucherRejected") openModal("factoryPaymentModal");
      if (["needSupplement", "supplement"].includes(factoryStatus)) openModal("factorySupplementModal");
    });
    document.getElementById("confirmFactorySupplement")?.addEventListener("click", () => {
      closeModal("factorySupplementModal");
      updateFactoryFlow("supplement");
      showToast("验厂资料已提交，等待平台复核");
    });
    document.querySelectorAll("[data-sample-stage]").forEach(node => {
      node.addEventListener("click", event => {
        event.stopPropagation();
        goSampleStage(node.dataset.sampleStage);
      });
    });
    document.querySelectorAll("[data-wechat-onboarding]").forEach(node => {
      node.addEventListener("click", () => {
        closeModal("shopOpenSuccessModal");
        switchModule("merchant-profile");
        document.querySelector('[data-merchant-profile-tab="certification"]')?.click();
        document.querySelector('[data-merchant-cert-tab="base"]')?.click();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
    const wechatCertOrder = ["submit", "review", "legal", "sign", "success"];
    const wechatCertLabels = {
      submit: "待提交资料",
      review: "微信审核中",
      legal: "待法人认证",
      sign: "待签约",
      success: "开通成功"
    };
    let currentWechatCertStatus = "submit";
    function setWechatCertStatus(nextStatus) {
      const activeIndex = wechatCertOrder.indexOf(nextStatus);
      if (activeIndex < 0) return;
      currentWechatCertStatus = nextStatus;
      const status = document.getElementById("wechatCertStatus");
      if (status) {
        status.textContent = wechatCertLabels[nextStatus];
        status.className = nextStatus === "success" ? "green" : "orange";
      }
      document.querySelectorAll("[data-wechat-cert-step]").forEach(step => {
        const index = wechatCertOrder.indexOf(step.dataset.wechatCertStep);
        step.classList.toggle("done", index < activeIndex);
        step.classList.toggle("current", index === activeIndex);
        const marker = step.querySelector("span");
        if (marker) marker.textContent = index < activeIndex ? "✓" : String(index + 1);
      });
      document.querySelectorAll("[data-wechat-cert-status]").forEach(button => {
        button.classList.toggle("active", button.dataset.wechatCertStatus === nextStatus);
      });
      const submitButton = document.getElementById("submitWechatCertBtn");
      if (submitButton) {
        submitButton.hidden = nextStatus !== "submit";
        submitButton.disabled = false;
        submitButton.textContent = "提交微信审核";
      }
      const linkPanel = document.getElementById("wechatCertLinkPanel");
      const linkLabel = document.getElementById("wechatCertLinkLabel");
      const link = document.getElementById("wechatCertLink");
      const showLink = nextStatus === "legal" || nextStatus === "sign";
      if (linkPanel) linkPanel.hidden = !showLink;
      if (showLink && linkLabel && link) {
        linkLabel.textContent = nextStatus === "legal" ? "法人认证链接" : "签约链接";
        link.textContent = nextStatus === "legal"
          ? "https://pay.weixin.qq.com/public/apply4ec_sign/legal-auth"
          : "https://pay.weixin.qq.com/public/apply4ec_sign/contract";
        link.href = link.textContent;
      }
      setWechatAdminLocked(nextStatus !== "submit");
    }
    document.querySelectorAll("[data-wechat-cert-status]").forEach(button => {
      button.addEventListener("click", () => setWechatCertStatus(button.dataset.wechatCertStatus));
    });
    document.getElementById("copyWechatCertLinkBtn")?.addEventListener("click", () => {
      const link = document.getElementById("wechatCertLink")?.textContent || "";
      navigator.clipboard?.writeText(link);
      showToast("链接已复制");
    });
    document.getElementById("submitWechatCertBtn")?.addEventListener("click", () => {
      setWechatCertStatus("review");
      showToast("微信支付进件已提交，等待微信审核");
    });

    const wechatAdminDefaults = {
      legal: { name: "张三", phone: "138****8000", idNo: "310***********1234", email: "admin@example.com" },
      manager: { name: "", phone: "", idNo: "", email: "" }
    };
    function setWechatAdminLocked(locked) {
      const selectedType = document.querySelector('input[name="merchantWechatAdminType"]:checked')?.value || "legal";
      document.querySelectorAll('input[name="merchantWechatAdminType"]').forEach(radio => {
        radio.disabled = locked;
      });
      ["wechatAdminName", "wechatAdminPhone", "wechatAdminIdNo", "wechatAdminEmail"].forEach(id => {
        const input = document.getElementById(id);
        if (input) input.readOnly = locked || selectedType !== "manager";
      });
      const toolbar = document.getElementById("wechatAdminToolbar");
      if (toolbar) toolbar.hidden = locked;
      const authTile = document.querySelector("#wechatAdminAuthField .upload-tile");
      if (authTile) {
        authTile.style.pointerEvents = locked ? "none" : "auto";
        authTile.style.opacity = locked ? ".55" : "1";
      }
    }
    function updateWechatAdminType(type) {
      const isManager = type === "manager";
      const values = wechatAdminDefaults[type];
      [
        ["wechatAdminName", "name"],
        ["wechatAdminPhone", "phone"],
        ["wechatAdminIdNo", "idNo"],
        ["wechatAdminEmail", "email"]
      ].forEach(([id, key]) => {
        const input = document.getElementById(id);
        if (!input) return;
        input.value = values[key];
        input.readOnly = !isManager || currentWechatCertStatus !== "submit";
      });
      const authField = document.getElementById("wechatAdminAuthField");
      if (authField) authField.style.display = isManager ? "block" : "none";
      setWechatAdminLocked(currentWechatCertStatus !== "submit");
    }
    document.querySelectorAll('input[name="merchantWechatAdminType"]').forEach(radio => {
      radio.addEventListener("change", () => updateWechatAdminType(radio.value));
    });
    document.getElementById("cancelWechatAdminEditBtn")?.addEventListener("click", () => {
      const legalRadio = document.querySelector('input[name="merchantWechatAdminType"][value="legal"]');
      if (legalRadio) legalRadio.checked = true;
      updateWechatAdminType("legal");
      showToast("已恢复经营者/法人信息");
    });
    document.getElementById("saveWechatAdminEditBtn")?.addEventListener("click", () => {
      const type = document.querySelector('input[name="merchantWechatAdminType"]:checked')?.value || "legal";
      if (type === "manager") {
        const requiredIds = ["wechatAdminName", "wechatAdminPhone", "wechatAdminIdNo", "wechatAdminEmail"];
        if (requiredIds.some(id => !document.getElementById(id)?.value.trim())) {
          showToast("请完善负责人信息");
          return;
        }
      }
      showToast(type === "manager" ? "负责人信息已保存" : "经营者/法人信息已确认");
    });
    document.getElementById("submitWechatOnboardingBtn")?.addEventListener("click", event => {
      const order = ["base", "subject", "legal", "admin", "review", "sign"];
      document.querySelectorAll("#wechatOnboardingStepper [data-wechat-step]").forEach(step => {
        const index = order.indexOf(step.dataset.wechatStep);
        step.classList.toggle("done", index < 4);
        step.classList.toggle("active", index === 4);
      });
      event.currentTarget.textContent = "已提交微信审核";
      event.currentTarget.disabled = true;
      showToast("微信支付进件已提交，等待微信审核");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.querySelectorAll("[data-toast]").forEach(node => node.addEventListener("click", () => showToast(node.dataset.toast)));
    document.getElementById("copyScreenshotBtn")?.addEventListener("click", copyCurrentPageScreenshot);
    document.getElementById("commentDrawerClose")?.addEventListener("click", closeProductCommentDrawer);
    document.getElementById("commentDrawerMask")?.addEventListener("click", closeProductCommentDrawer);
    document.getElementById("productCommentInput")?.addEventListener("input", event => {
      document.getElementById("productCommentCount").textContent = event.target.value.length;
    });
    document.getElementById("submitProductCommentBtn")?.addEventListener("click", () => {
      document.getElementById("productCommentInput").value = "";
      document.getElementById("productCommentCount").textContent = "0";
      closeProductCommentDrawer();
      showToast("试样反馈已提交");
    });
    document.querySelectorAll(".date-filter button").forEach(button => {
      button.addEventListener("click", () => {
        button.parentElement.querySelectorAll("button").forEach(item => item.classList.remove("active"));
        button.classList.add("active");
      });
    });
    document.querySelectorAll("[data-detail]").forEach(row => {
      row.addEventListener("click", () => {
        document.getElementById("drawerTitle").textContent = row.dataset.detail;
        document.getElementById("drawerModule").textContent = document.getElementById("pageTitle").textContent;
        document.getElementById("drawer").classList.add("open");
      });
    });
    document.getElementById("drawerClose").addEventListener("click", () => document.getElementById("drawer").classList.remove("open"));
    const currentFlowStep = document.querySelector(".flow-step.current[data-panel-target]") || document.querySelector(".flow-step[data-panel-target]");
    if (currentFlowStep) {
      switchDetailPanel(currentFlowStep.dataset.panelTarget, false);
    }
    renderSampleList();
    renderAddressList();
  