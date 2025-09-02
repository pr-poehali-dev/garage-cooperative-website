import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Данные для системы учета взносов
  const paymentData = [
    { garage: "Гараж №12", owner: "Иванов И.И.", amount: 2500, status: "Оплачено", date: "15.08.2024" },
    { garage: "Гараж №15", owner: "Петров П.П.", amount: 2500, status: "Задолженность", date: "01.07.2024" },
    { garage: "Гараж №23", owner: "Сидоров С.С.", amount: 2500, status: "Оплачено", date: "20.08.2024" },
    { garage: "Гараж №31", owner: "Козлов К.К.", amount: 2500, status: "Частично", date: "10.08.2024" },
    { garage: "Гараж №42", owner: "Морозов М.М.", amount: 2500, status: "Задолженность", date: "15.06.2024" },
  ];

  const totalGarages = 150;
  const paidGarages = paymentData.filter(p => p.status === "Оплачено").length;
  const debtGarages = paymentData.filter(p => p.status === "Задолженность").length;
  const paymentProgress = (paidGarages / totalGarages) * 100;

  const news = [
    {
      id: 1,
      title: "Собрание членов кооператива",
      date: "25.08.2024",
      content: "Уважаемые гаражники! 1 сентября в 18:00 состоится общее собрание по вопросу ремонта крыши.",
      urgent: true
    },
    {
      id: 2,
      title: "Завершены работы по благоустройству",
      date: "20.08.2024",
      content: "Закончены работы по асфальтированию въездной дороги и установке освещения.",
      urgent: false
    }
  ];

  const documents = [
    { name: "Устав кооператива", date: "01.01.2024", type: "PDF" },
    { name: "Положение о взносах", date: "15.03.2024", type: "PDF" },
    { name: "Протокол собрания от 20.07.2024", date: "20.07.2024", type: "PDF" }
  ];

  const announcements = [
    {
      id: 1,
      title: "Продается гараж №67",
      author: "Николаев Н.Н.",
      date: "22.08.2024",
      contact: "+7 (999) 123-45-67"
    },
    {
      id: 2,
      title: "Сдается гараж в аренду",
      author: "Федоров Ф.Ф.", 
      date: "18.08.2024",
      contact: "+7 (999) 234-56-78"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Car" className="text-blue-600" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ПГСК "Южный-2"</h1>
                <p className="text-sm text-gray-600">Современное управление кооперативом</p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>+7 (495) 123-45-67</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 py-4">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'payments', label: 'Взносы', icon: 'CreditCard' },
              { id: 'news', label: 'Новости', icon: 'Newspaper' },
              { id: 'documents', label: 'Документы', icon: 'FileText' },
              { id: 'announcements', label: 'Объявления', icon: 'Megaphone' },
              { id: 'about', label: 'О нас', icon: 'Info' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Главная */}
        {activeSection === 'home' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Добро пожаловать в ПГСК "Южный-2"</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Современная система управления гаражным кооперативом с удобным учетом взносов, 
                новостями и документооборотом
              </p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Всего гаражей</p>
                      <p className="text-2xl font-bold">{totalGarages}</p>
                    </div>
                    <Icon name="Car" className="text-blue-600" size={24} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Оплачено</p>
                      <p className="text-2xl font-bold text-green-600">{paidGarages * 30}</p>
                    </div>
                    <Icon name="CheckCircle" className="text-green-600" size={24} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Задолженность</p>
                      <p className="text-2xl font-bold text-red-600">{debtGarages * 30}</p>
                    </div>
                    <Icon name="AlertCircle" className="text-red-600" size={24} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Собираемость</p>
                      <p className="text-2xl font-bold">{Math.round(paymentProgress)}%</p>
                    </div>
                    <Icon name="TrendingUp" className="text-blue-600" size={24} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Последние новости */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Newspaper" size={20} />
                  <span>Последние новости</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {news.slice(0, 2).map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      {item.urgent && <Badge variant="destructive">Срочно</Badge>}
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.content}</p>
                        <p className="text-xs text-gray-500 mt-2">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Система взносов */}
        {activeSection === 'payments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Учет взносов</h2>
              <Button className="flex items-center space-x-2">
                <Icon name="Download" size={16} />
                <span>Экспорт отчета</span>
              </Button>
            </div>

            {/* Сводка по оплатам */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Общая собираемость</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={paymentProgress} className="mb-2" />
                  <p className="text-sm text-gray-600">{Math.round(paymentProgress)}% от общего фонда</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Собрано средств</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600">375,000 ₽</p>
                  <p className="text-sm text-gray-600">из 375,000 ₽ запланированных</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Задолженность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-red-600">75,000 ₽</p>
                  <p className="text-sm text-gray-600">{debtGarages * 30} должников</p>
                </CardContent>
              </Card>
            </div>

            {/* Таблица платежей */}
            <Card>
              <CardHeader>
                <CardTitle>Детализация по платежам</CardTitle>
                <CardDescription>Актуальная информация по всем взносам</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Гараж</TableHead>
                      <TableHead>Владелец</TableHead>
                      <TableHead>Сумма</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Дата оплаты</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentData.map((payment, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{payment.garage}</TableCell>
                        <TableCell>{payment.owner}</TableCell>
                        <TableCell>{payment.amount.toLocaleString()} ₽</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              payment.status === 'Оплачено' ? 'default' : 
                              payment.status === 'Задолженность' ? 'destructive' : 
                              'secondary'
                            }
                          >
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Icon name="Eye" size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Новости */}
        {activeSection === 'news' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Новости кооператива</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      {item.urgent && <Badge variant="destructive">Срочно</Badge>}
                    </div>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.content}</p>
                    <Button variant="link" className="p-0 mt-3">
                      Читать далее →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Документы */}
        {activeSection === 'documents' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Документы</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="FileText" className="text-blue-600" size={24} />
                        <div>
                          <h4 className="font-semibold">{doc.name}</h4>
                          <p className="text-sm text-gray-600">Обновлен: {doc.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{doc.type}</Badge>
                        <Button variant="ghost" size="sm">
                          <Icon name="Download" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Объявления */}
        {activeSection === 'announcements' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Объявления</h2>
              <Button>
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить объявление
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {announcements.map((announcement) => (
                <Card key={announcement.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <CardDescription>
                      {announcement.author} • {announcement.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">Контакт: {announcement.contact}</p>
                      <Button variant="outline" size="sm">
                        <Icon name="Phone" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* О нас */}
        {activeSection === 'about' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">О кооперативе</h2>
            <Card>
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 mb-6">
                    ПГСК "Южный-2" основан в 1985 году и объединяет 150 владельцев гаражей.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Наши услуги</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span>Охрана территории 24/7</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span>Электроснабжение</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span>Водоснабжение</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span>Уборка территории</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Контакты</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" size={16} />
                          <span>+7 (495) 123-45-67</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Mail" size={16} />
                          <span>info@avtoclub.ru</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="MapPin" size={16} />
                          <span>г. Москва, ул. Гаражная, 15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;