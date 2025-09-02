import Header from '@/components/Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Icon from '@/components/ui/icon'

const Useful = () => {
  const tips = [
    {
      id: 1,
      category: 'Безопасность',
      title: 'Противопожарная безопасность в гараже',
      content: 'Обязательно установите огнетушитель, не храните легковоспламеняющиеся материалы, проверяйте электропроводку.',
      icon: 'Shield',
      urgency: 'high'
    },
    {
      id: 2,
      category: 'Уход',
      title: 'Зимняя подготовка гаража',
      content: 'Утеплите ворота, проверьте кровлю на протечки, подготовьте систему отопления.',
      icon: 'Snowflake',
      urgency: 'medium'
    },
    {
      id: 3,
      category: 'Ремонт',
      title: 'Устранение конденсата',
      content: 'Улучшите вентиляцию, используйте влагопоглотители, проверьте теплоизоляцию.',
      icon: 'Wrench',
      urgency: 'medium'
    },
    {
      id: 4,
      category: 'Организация',
      title: 'Эффективное использование пространства',
      content: 'Установите стеллажи, используйте потолочные системы хранения, организуйте рабочую зону.',
      icon: 'Package',
      urgency: 'low'
    }
  ]

  const faqs = [
    {
      question: 'Как рассчитываются членские взносы?',
      answer: 'Размер взносов утверждается общим собранием. В 2024 году взнос составляет 2500 рублей за гараж в месяц. В него входят: охрана, электроснабжение, водоснабжение, уборка территории, текущий ремонт.'
    },
    {
      question: 'Можно ли сдавать гараж в аренду?',
      answer: 'Да, согласно уставу члены кооператива имеют право сдавать свои гаражи в аренду. Необходимо уведомить правление и заключить договор аренды.'
    },
    {
      question: 'Как проходит процедура продажи гаража?',
      answer: 'При продаже гаража необходимо: уведомить правление, предоставить справку об отсутствии задолженностей, оформить переход права собственности через нотариуса, передать документы новому владельцу.'
    },
    {
      question: 'Что делать при поломке общего оборудования?',
      answer: 'О любых поломках освещения, водопровода, электрооборудования немедленно сообщайте дежурному или в правление по телефону +7 (495) 123-45-67.'
    },
    {
      question: 'Как получить доступ в гараж в нерабочее время?',
      answer: 'Кооператив работает круглосуточно. У каждого владельца есть ключ от основных ворот. В экстренных случаях обращайтесь к дежурному охраннику.'
    }
  ]

  const services = [
    {
      name: 'Слесарные работы',
      description: 'Ремонт замков, изготовление ключей, мелкий ремонт',
      contact: 'Иванов И.И. +7 (999) 111-22-33',
      rating: 5,
      available: true
    },
    {
      name: 'Электромонтажные работы',
      description: 'Монтаж проводки, установка розеток, ремонт электрооборудования',
      contact: 'Петров П.П. +7 (999) 222-33-44',
      rating: 4,
      available: true
    },
    {
      name: 'Покраска и отделка',
      description: 'Покраска ворот, стен, отделочные работы',
      contact: 'Сидоров С.С. +7 (999) 333-44-55',
      rating: 4,
      available: false
    },
    {
      name: 'Сварочные работы',
      description: 'Ремонт металлических конструкций, изготовление стеллажей',
      contact: 'Козлов К.К. +7 (999) 444-55-66',
      rating: 5,
      available: true
    }
  ]

  const emergencyContacts = [
    {
      service: 'Дежурный охранник',
      phone: '+7 (495) 123-45-67',
      availability: '24/7',
      icon: 'Shield'
    },
    {
      service: 'Правление кооператива',
      phone: '+7 (495) 123-45-68',
      availability: 'Пн-Пт 17:00-19:00',
      icon: 'Users'
    },
    {
      service: 'Аварийная служба',
      phone: '+7 (495) 123-45-69',
      availability: '24/7',
      icon: 'AlertTriangle'
    },
    {
      service: 'Пожарная служба',
      phone: '101',
      availability: '24/7',
      icon: 'Flame'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Полезная информация</h1>
          <p className="text-xl text-muted-foreground">
            Советы, рекомендации и важная информация для владельцев гаражей
          </p>
        </div>

        <Tabs defaultValue="tips" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tips" className="flex items-center space-x-2">
              <Icon name="Lightbulb" size={16} />
              <span>Советы</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center space-x-2">
              <Icon name="HelpCircle" size={16} />
              <span>FAQ</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center space-x-2">
              <Icon name="Tool" size={16} />
              <span>Услуги</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>Контакты</span>
            </TabsTrigger>
          </TabsList>

          {/* Tips Tab */}
          <TabsContent value="tips" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {tips.map((tip) => (
                <Card key={tip.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon name={tip.icon} size={24} className="text-primary" />
                        <div>
                          <CardTitle className="text-lg">{tip.title}</CardTitle>
                          <CardDescription>
                            <Badge 
                              variant={tip.urgency === 'high' ? 'destructive' : 
                                     tip.urgency === 'medium' ? 'secondary' : 'outline'}
                              className="mt-1"
                            >
                              {tip.category}
                            </Badge>
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tip.content}</p>
                    <Button variant="ghost" size="sm">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Zap" size={24} className="mr-2 text-yellow-500" />
                  Быстрые советы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <Icon name="Lock" size={20} className="text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Всегда закрывайте гараж</h4>
                    <p className="text-sm text-muted-foreground">Даже на короткое время</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <Icon name="Eye" size={20} className="text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Следите за соседями</h4>
                    <p className="text-sm text-muted-foreground">Сообщайте о подозрительной активности</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <Icon name="Phone" size={20} className="text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Сохраните контакты</h4>
                    <p className="text-sm text-muted-foreground">Правления и аварийных служб</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
                <CardDescription>
                  Ответы на самые популярные вопросы членов кооператива
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Icon name="MessageCircle" size={48} className="mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Не нашли ответ?</h3>
                <p className="text-muted-foreground mb-6">
                  Задайте свой вопрос правлению кооператива
                </p>
                <Button>
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать вопрос
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Рекомендуемые мастера</CardTitle>
                <CardDescription>
                  Проверенные специалисты для ремонта и обслуживания гаражей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <Card key={index} className={service.available ? '' : 'opacity-60'}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{service.name}</h3>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={16}
                                className={i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">{service.contact}</p>
                          <Badge variant={service.available ? 'default' : 'secondary'}>
                            {service.available ? 'Доступен' : 'Занят'}
                          </Badge>
                        </div>
                        <Button 
                          size="sm" 
                          className="w-full mt-4" 
                          disabled={!service.available}
                        >
                          <Icon name="Phone" size={16} className="mr-2" />
                          Связаться
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Экстренные контакты</CardTitle>
                <CardDescription>
                  Важные телефоны для экстренных ситуаций
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {emergencyContacts.map((contact, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <Icon name={contact.icon} size={32} className="text-primary" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{contact.service}</h3>
                            <p className="text-2xl font-bold text-primary">{contact.phone}</p>
                            <p className="text-sm text-muted-foreground">{contact.availability}</p>
                          </div>
                          <Button size="sm">
                            <Icon name="Phone" size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={24} className="mr-2" />
                  Часы работы правления
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span className="font-semibold">17:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span className="font-semibold">10:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Воскресенье</span>
                    <span>Выходной</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Useful