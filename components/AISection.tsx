import styles from '../styles/AISection.module.css'

export default function AISection() {
  const aiFeatures = [
    {
      icon: "/icons/analysis.svg",
      title: "تحليل اتجاهات السوق",
      description: "تحليل بيانات السوق العقاري وتقديم توقعات دقيقة لاتجاهات الأسعار والطلب في المناطق المختلفة"
    },
    {
      icon: "/icons/price.svg",
      title: "تسعير ذكي للعقارات",
      description: "تحديد السعر المثالي للإيجار أو البيع بناءً على مئات العوامل المؤثرة في السوق"
    },
    {
      icon: "/icons/automation.svg",
      title: "أتمتة العمليات",
      description: "أتمتة المهام الروتينية مثل جدولة الصيانة، وتحصيل الإيجارات، وإرسال الإشعارات"
    },
    {
      icon: "/icons/recommendation.svg",
      title: "توصيات استثمارية",
      description: "اكتشاف فرص الاستثمار العقاري المناسبة بناءً على أهدافك المالية ومعايير المخاطرة"
    }
  ]

  return (
    <section id="ai" className={styles.aiSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>قوة الذكاء الاصطناعي في خدمة العقارات</h2>
            <p className={styles.subtitle}>
              نستخدم أحدث تقنيات الذكاء الاصطناعي لتحسين تجربتك في سوق العقارات
            </p>
            
            <div className={styles.featuresList}>
              {aiFeatures.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className={styles.iconImage}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'block';
                        }
                      }}
                    />
                    <div className={styles.iconPlaceholder}>
                      {index === 0 ? "📊" : index === 1 ? "💰" : index === 2 ? "⚙️" : "💡"}
                    </div>
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.dashboardPreview}>
            <img 
              src="/icons/dashboard.svg" 
              alt="لوحة تحكم أملاك تك - عرض شامل للبيانات والإحصائيات العقارية"
              className={styles.dashboardImage}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <div className={styles.dashboardFallback}>
              <div className={styles.dashboard}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardTitle}>لوحة التحكم</div>
                  <div className={styles.dashboardControls}>
                    <div className={styles.controlBtn}>🔔</div>
                    <div className={styles.controlBtn}>👤</div>
                  </div>
                </div>
                
                <div className={styles.dashboardContent}>
                  <div className={styles.chartContainer}>
                    <div className={styles.chartTitle}>تحليل الأداء</div>
                    <div className={styles.chart}>
                      <div className={styles.bar} style={{height: '60%'}}></div>
                      <div className={styles.bar} style={{height: '80%'}}></div>
                      <div className={styles.bar} style={{height: '45%'}}></div>
                      <div className={styles.bar} style={{height: '90%'}}></div>
                      <div className={styles.bar} style={{height: '70%'}}></div>
                      <div className={styles.bar} style={{height: '85%'}}></div>
                      <div className={styles.bar} style={{height: '55%'}}></div>
                    </div>
                  </div>
                  
                  <div className={styles.statsContainer}>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>52.55%</div>
                      <div className={styles.statLabel}>معدل النمو</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statNumber}>13,264</div>
                      <div className={styles.statLabel}>العقارات</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
